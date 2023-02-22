// import Libs
// * 1
import { useState } from 'react';


// import Css
import './App.css';



function App() {
// hook bauen
// * 2 
const [count, setCount] = useState(0);

// function bauen
// * 4
function increment() {
  setCount(count + 1);
}

  return (
    <div className="App">
    
  {/*  // html bauen   
   // * 3 */}
   <p> {count}</p>

 {/*   // * 5 onClick hinzufügen */}
   <button onClick={increment}> + 1</button>

   {/* // * 6 Szenario 2 alles 1-5 in arrow function */}
   <button onClick={ ( ) => {setCount(count-1)}} > - 1</button>



    </div>
  );
}

export default App;
