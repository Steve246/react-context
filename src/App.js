import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { MainContext } from "./context/MainContext";
import LoginView from "./features/login/LoginView";
import ProfileView from "./features/profile/ProfileVIew";
import MainContextProvider from "./context/MainContextProvider";

class App extends Component {
  render() {
    return (
      <MainContextProvider>
        <LoginView />
        <ProfileView />
      </MainContextProvider>
    );
  }
}

export default App;
