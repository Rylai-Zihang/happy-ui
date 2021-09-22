import LayoutExample from "./layout.example";
import React from "react";
import Demo from "../demo"

const LayoutDemo = () => {
    return (
        <Demo code={require("!!raw-loader!./layout.example.tsx").default}>
            <LayoutExample />
        </Demo>
    )
}

export default LayoutDemo