"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function CardWrapper(_a) {
    var children = _a.children, color = _a.color;
    return (<div style={{
            marginTop: 24,
            marginBottom: 24,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: 32,
        }}>
      {children}
    </div>);
}
exports.default = CardWrapper;
