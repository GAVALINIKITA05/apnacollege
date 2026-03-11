import logo from './logo.svg';
import './App.css';
// import RegisterForm from './AllForm/RegisterForm';
import UncontrolReg from './uncontrol/UncontrolReg';
import Signup from './uncontrol/Signup';

function App() {
  return (
    <div className="App">
      {/* <UncontrolReg></UncontrolReg> */}
      {/* <RegisterForm></RegisterForm>   */}
      <Signup></Signup>
    </div>
  );
}

export default App;
