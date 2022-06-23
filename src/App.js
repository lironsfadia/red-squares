import logo from './logo.svg';
import './App.css';

function doubleMe(){
  const node = document.createElement("div"); 

  node.setAttribute("id", "header1"); 

  node.style.cssText = 'border: solid 1px red;width: 200px;height: 200px;'; 

  document.getElementById("header").appendChild(node); 
}

function App() {
  return (
    <div id="header" className="red box" onClick={doubleMe}>
    </div>
  );
}

export default App;
