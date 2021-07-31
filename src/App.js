import "./styles.css";

import {Counter} from "./Counter";


export default () => {
  return (
    <div className="App">
      <Counter defaultCounter={25}/>
      <Counter defaultCounter={42}/>
    </div>
  );
}
