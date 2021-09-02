import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function getButtonText(){
  return '點我!';
}

const App = () =>{
  const buttonText ='click me!';
  const labelText = 'Enter Name :';
  return(
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: 'blue', color: 'white'}}>
        {getButtonText()}
      </button>
    </div>
  );
};

export default App;
