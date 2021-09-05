
import './App.css';
import Header from './components/Header';
import Signin from './components/Signin';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <Header></Header>
   <Router> 
   <Route component={Signin} path={"/Signin"}></Route>
        {/* <Route component={Home} path={"/home"}></Route>
        <Route component={Signup} path={"/signup"}></Route> */}
   </Router>
   {/* <Signin></Signin> */}
    </div>
  );
}

export default App;
