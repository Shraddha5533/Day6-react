import { useMemo, useState } from "react";

function Memo() {

    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);


   const multiplication=useMemo( function multiply()
   {
       return add*10;
   },[add])
  
    return (
      <div>
        <h1>Learn useState</h1>
  
        <button onClick={() => setAdd(add + 1)}>Addition</button>
        <span>{add}</span><br/>
        {multiplication}<br/>
        <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
        
        <span>{minus}</span>
      </div>
    );
  }

  export default Memo(callback);