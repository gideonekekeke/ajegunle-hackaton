import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./AuthState/GlobalContext";
import Ajsecure from "./ayama/Ajsecure/Ajsecure";
import Header from "./ayama/Header/Header";
import Cases from "./Components/Cases";
import HomeView from "./Components/HomeView";
import JoshCard from "./Components/JoshCard/Joshcard";

import Login from "./Components/Login";
import ModalPicture from "./Components/ModalPicture";
import NavBar from "./Components/NavBar/NavBar";
import Reports from "./Components/Reports";

import SignUp from "./Components/Signup";

function App() {
  return (
    <div style={{ background: "#34384A", height: "5000px" }}>
      <GlobalProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/report" component={Reports} />
            <Route exact path="/case" component={Cases} />
            <Route exact path="/josh" component={JoshCard} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;

// setSelectedImg={setSelectedImg}
