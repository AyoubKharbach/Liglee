import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Header from "./components/header";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Classes from "./pages/classes";
import Resoures from "./pages/resoures";
import LerningPlan from "./pages/lerningPlan";
import Chat from "./pages/chat";
import Setting from "./pages/setting";
import UserMenu from "./components/userMenu";

class App extends Component {
  state = {
    sideMenuOpen: false,
  };

  userMenuToggleHandler = () => {
    this.setState((prevState) => {
      return { sideMenuOpen: !prevState.sideMenuOpen };
    });
  };
  closeMenuToggleHandler = () => {
    this.setState({ sideMenuOpen: false });
  };
  render() {
    let userMenu;
    if (this.state.sideMenuOpen) {
      userMenu = <UserMenu click={this.closeMenuToggleHandler} />;
    }
    return (
      <BrowserRouter>
        <div className="app">
          <Header click={this.userMenuToggleHandler} />
          <div className="content">
            <Sidebar />
            {userMenu}
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/classes" exact component={Classes} />
              <Route path="/resoures" exact component={Resoures} />
              <Route path="/learningplan" exact component={LerningPlan} />
              <Route path="/chat" exact component={Chat} />
              <Route path="/setting" exact component={Setting} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
