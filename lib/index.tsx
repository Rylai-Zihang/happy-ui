import * as React from "react"
import * as ReactDOM from "react-dom"
import Icon from "./icon/icon"

const outputTarget: React.MouseEventHandler<SVGElement> = (e) => {
  console.log(e.target)
}

ReactDOM.render(<div>
  <Icon name="cat" onClick={outputTarget} onMouseEnter={() => console.log("cat-enter")} />
  <Icon name="dog" onClick={outputTarget} onMouseLeave={() => console.log("dog-leave")} />
</div>, document.querySelector('#root'))
