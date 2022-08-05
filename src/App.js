import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { MainContext } from "./context/MainContext";
import LoginView from "./features/login/LoginView";
import ProfileView from "./features/profile/ProfileVIew";
import MainContextProvider from "./context/MainContextProvider";
import { DependeciesContextProvider } from "./context/DependeciesContextProvider";
import { AuthenticationService } from "./services/AuthenticateService";
import { CombineContextProvider } from "./context/CombinedContext";

class App extends Component {
  render() {
    return (
      <DependeciesContextProvider
        services={{
          authenticationService: AuthenticationService(),
        }}
      >
        <MainContextProvider>
          <CombineContextProvider>
            <LoginView />
            <ProfileView />
          </CombineContextProvider>
        </MainContextProvider>
      </DependeciesContextProvider>
    );
  }
}

export default App;
