import React from 'react';
import Icon from './icon';

const outputTarget: React.MouseEventHandler<SVGElement> = (e) => {
  console.log(e.target)
}


const IconExample: React.FunctionComponent = () => {
  return (
    <div>
      <Icon name="cat" onClick={outputTarget} onMouseEnter={() => console.log("cat-enter")} />
      <Icon name="dog" onClick={outputTarget} onMouseLeave={() => console.log("dog-leave")} />
    </div>
  );
};

export default IconExample