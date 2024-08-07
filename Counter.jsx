import { useState } from "react";
function Counter() {
    //use state
  
    let [count , SetCount]=useState(10);
  
    function addOne()
    {
      SetCount(count+1);
    }
  
    return (
     
        <div className='App'>
  
          <button onClick={addOne}>Count ={count}</button>
           </div>
    )
  }
  
  export default Counter;