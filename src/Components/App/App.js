import React, { Component } from 'react';
// import { Query } from "react-apollo";
import {BrowserRouter , Switch, Route} from "react-router-dom"
import Notes from "../../Route/Notes"
import Note from "../../Route/Note"
import Add from "../../Route/Add"
import Edit from "../../Route/Edit"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/"} component={Notes}></Route>
          <Route path={"/add"} component={Add}></Route>
          <Route path={"/note/:id"} component={Note}></Route>
          <Route path={"/edit/:id"} component={Edit}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
