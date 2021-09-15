import React, { useState } from "react";
import Dialog from "./dialog"

export default function() {
  const [ visible, setVisible ] = useState(false)
  return (
    <div>
      <button onClick={() => { setVisible(!visible) }}>visible</button>
      <Dialog visible={visible}>
        hahahaha
      </Dialog>
    </div>
  )
}