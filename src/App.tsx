import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar";
import {TodosPage} from "./pages/TodosPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={'App'}>
        <Navbar/>
        <Switch>
          <Route component={TodosPage} path={'/'} exact/>
          <Route component={AboutPage}  path={'/about'}/>
        </Switch>
      </div>

    </BrowserRouter>
  )
}

export default App;
