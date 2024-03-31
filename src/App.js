import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const HomePage = () => <div>HomePage</div>;
const LoginPage = () => <div>Login</div>;
const PosPage = () => <div>Pos</div>;

function App() {
  // const location = useLocation();
  // console.log({ buildNumber});
  useEffect(() => {
    // console.log(buildNumber)
      window.href = '/3000';
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/:buildNumber"><HomePage/></Route>
          <Route exact path="/:buildNumber/login"><LoginPage/></Route>
          <Route exact path="/:buildNumber/pos"><PosPage/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
