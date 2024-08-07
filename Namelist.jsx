import { useState } from "react"

//use state
function NameList()
{
    let [list ,setList]=useState(["caption","jack","sparrow"]);
    let [name,setName]=useState(() => "abc");//when we write name here then it adds into input box


    const addName=() =>
    {
       setList([...list,name]); //previous names were added and also new names 
       setName(" "); //IT ADDS BLANK NAME ALSO
    };


    return(

        <div>
         <ul>
            {list.map((name) => (

                <li key={name}>{name}</li>
            ))}
         </ul>
         <input
         type="text"
         value={name}
         onChange={(e) => setName(e.target.value)}  //to access the current value
         />
         <button onClick={addName}>Add Name</button>
           


        </div>
    )

}
export default NameList