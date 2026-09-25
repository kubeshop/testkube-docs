#!/usr/bin/env python3
"""Usage: PROXY_API_KEY=... python3 smoke.py BASE_URL MODEL [--tools]."""
import json
import os
import sys
import urllib.error
import urllib.request

base, model = sys.argv[1:3]
key = os.environ["PROXY_API_KEY"]


def request(path, payload=None, token=key):
    req = urllib.request.Request(
        base.rstrip("/") + path,
        data=json.dumps(payload).encode() if payload is not None else None,
        headers={"Authorization": "Bearer " + token, "Content-Type": "application/json"},
    )
    return urllib.request.urlopen(req, timeout=180)


def failure(payload, token, expected):
    try:
        with request("/chat/completions", payload, token):
            raise AssertionError("Expected request rejection")
    except urllib.error.HTTPError as exc:
        assert exc.code in expected, f"Unexpected HTTP {exc.code}"
        if exc.code == 400 and token != key:
            assert json.load(exc)["error"]["type"] == "no_db_connection"
        print(f"PASS rejection: HTTP {exc.code}")


payload = {
    "model": model,
    "messages": [{"role": "user", "content": "Reply with the word hello."}],
    "max_tokens": 64,
}
with request("/models") as response:
    assert model in [item["id"] for item in json.load(response)["data"]]
print("PASS model listing")
failure(payload, "sk-invalid-doc-test-key", {400, 401, 403})
failure(dict(payload, model="nonexistent-doc-test-model"), key, {400, 404})
with request("/chat/completions", payload) as response:
    result = json.load(response)
    assert result["choices"][0]["message"]["content"].strip()
print("PASS chat")
with request("/chat/completions", dict(payload, stream=True)) as response:
    text, done = "", False
    for raw in response:
        line = raw.decode().strip()
        if not line.startswith("data: "):
            continue
        data = line[6:]
        if data == "[DONE]":
            done = True
            break
        chunk = json.loads(data)
        for choice in chunk.get("choices", []):
            text += choice.get("delta", {}).get("content") or ""
    assert text.strip() and done, "Incomplete stream"
print("PASS streaming")

if "--tools" in sys.argv[3:]:
    tool = {
        "type": "function",
        "function": {
            "name": "echo",
            "description": "Return the supplied text unchanged.",
            "parameters": {
                "type": "object",
                "properties": {"text": {"type": "string"}},
                "required": ["text"],
                "additionalProperties": False,
            },
        },
    }
    messages = [{"role": "user", "content": "Call echo with text hello, then repeat its result."}]
    with request("/chat/completions", dict(
        payload, messages=messages, tools=[tool], max_tokens=256,
        tool_choice={"type": "function", "function": {"name": "echo"}},
    )) as response:
        message = json.load(response)["choices"][0]["message"]
    messages.append(message)
    calls = message.get("tool_calls", [])
    assert calls, "No tool call returned"
    for call in calls:
        assert call["function"]["name"] == "echo"
        args = json.loads(call["function"]["arguments"])
        assert isinstance(args.get("text"), str)
        messages.append({"role": "tool", "tool_call_id": call["id"], "content": args["text"]})
    with request("/chat/completions", dict(payload, messages=messages, tools=[tool], tool_choice="none")) as response:
        assert json.load(response)["choices"][0]["message"]["content"].strip()
    print("PASS tool round trip")
