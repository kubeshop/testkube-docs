"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var react_hotkeys_hook_1 = require("react-hotkeys-hook");
var useBaseUrl_1 = require("@docusaurus/useBaseUrl");
function Card(_a) {
    var children = _a.children, title = _a.title, hotkey = _a.hotkey, color = _a.color, link = _a.link;
    var redirectLink = (0, useBaseUrl_1.default)(link);
    hotkey &&
        (0, react_hotkeys_hook_1.useHotkeys)("shift+".concat(hotkey), function () { return window.location.assign(redirectLink); });
    return (<Link_1.default className="card category__card" to={link}>
      <h2 className="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module" title={title}>
        <div style={{
            padding: "8px 10px 8px 10px",
            borderRadius: 4,
            fontSize: "0.6rem",
            border: "1px solid ".concat(color),
            color: color,
            display: "inline-block",
            marginRight: 12,
        }}>
          {hotkey}
        </div>
        <div>{title}</div>
      </h2>
      <p className=" cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">
        {children}
      </p>
    </Link_1.default>);
}
exports.default = Card;
