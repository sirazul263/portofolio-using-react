import { Route, BrowserRouter as Router, Switch } from "react-router";
import "./App.css";
import About from "./components/About/About";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import SideBar from "./components/Sidebar/SideBar";
import "./styles/stye.scss";
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <SideBar></SideBar>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/projects">
              <Projects></Projects>
            </Route>
            <Route exact path="/achievements">
              <Achievements></Achievements>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
