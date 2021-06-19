import logo from './logo.svg';
import './App.css';
import Content from './components/Content'
import Main from './components/Nested'
import Employee from './components/Employee';
function App() {
  return (
    <div className="App">
     {/* <h1>Welcome to the React Workshop</h1>
     <Main/> */}
   <Employee />
  
    </div>
  );
}

export default App;
