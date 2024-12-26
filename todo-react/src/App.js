import logo from './logo.svg';
import './App.css';
import StateManagement from './StateManagement';
import Reducers from './Reducers';
import Signup from './Signup';
import RefWebhooks from './RefWebhooks';
import Todo from './Todo';
import { ThemeProvider } from './useContext/ThemeProvider';
import Navbar from './useContext/NavBar';
import Toggle from './Toggle';
import Input from './Task/Input';
import Todolist1 from './Todolist1';


function App() {
  return (
    <div className="App">
      <p>welcome</p>
      {/* <StateManagement/>
      <Reducers/> */}
      {/* <Signup></Signup> */}
     {/* < RefWebhooks/> */}
     {/* <Todo/> */}
     {/* <ThemeProvider>
      <Navbar />
    </ThemeProvider> */}
    {/* <Toggle /> */}
    {/* <Input /> */}

    <Todolist1 />
    </div>
  );
}

export default App;
