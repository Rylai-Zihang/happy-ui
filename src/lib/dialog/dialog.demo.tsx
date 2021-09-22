import DialogExample from "./dialog.example";
import React from "react";
import Demo from "../demo"

const DialogDemo = () => {
    return (
        <Demo code={require("!!raw-loader!./dialog.example.tsx").default}>
            <DialogExample />
        </Demo>
    )
}

export default DialogDemo