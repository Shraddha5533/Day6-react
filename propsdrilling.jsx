
// Ensure the path is correct

function propsDrilling({ name }) {
  return (
    <div>
      <propsDrilling2 name={name} />
    </div>
  );
}
export default propsDrilling;

//props drilling 

//parent component -> child A -> Child B -> Child C
//in that we can not pass the data directly to child c
//we can take help help from other child component 
//so its the drawback of the props drilling. 

