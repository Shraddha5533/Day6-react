import  { useContext } from 'react';
import { DataContext } from './App';

function ContextAPI3() {
  const name = useContext(DataContext);

  return (
    <div>
      <h1>My name is {name}</h1>
    </div>
  );
}

export default ContextAPI3;
