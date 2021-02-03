import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/home/Home';
import Project from './components/project/Project';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/project" component={Project} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
