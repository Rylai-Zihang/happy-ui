import React, { useState } from "react";
import Dialog, { alert, confirm, modal } from "./dialog"

export default function () {
    const [visible, setVisible] = useState(false)
    const openModal = () => {
        const closeModal = modal(<div><h1>modal</h1><button onClick={() => closeModal()}>关闭</button></div>)
    }
    return (
        <div>
            <Dialog visible={visible} onClose={() => { setVisible(false) }}>
                我是一个dialog
            </Dialog>
            <div>
                <h1>第一个例子</h1>
                <button onClick={() => { alert("1") }}>test alert</button>
            </div>
            <div>
                <h1>第二个例子</h1>
                <button onClick={() => { confirm("你要吃饭吗", () => { console.log("吃") }, () => { console.log("不吃") }) }}>
                    test confirm
                </button>
            </div>
            <div>
                <h1>第三个例子</h1>
                <button onClick={openModal}>test modal</button>
            </div>
        </div >
    )
}
