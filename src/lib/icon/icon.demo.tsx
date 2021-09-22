import IconExample from "./icon.example";
import React from "react";
import Demo from "../demo"

const IconDemo = () => {
    return (
        <Demo code={require("!!raw-loader!./icon.example.tsx").default}>
            <IconExample />
        </Demo>
    )
}

export default IconDemo