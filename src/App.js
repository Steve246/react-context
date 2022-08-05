import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { MainContext } from "./context/MainContext";
import LoginView from "./features/login/LoginView";
import ProfileView from "./features/profile/ProfileVIew";

class App extends Component {
  state = {
    profile: {},
  };

  setProfile = (profile) => {
    console.log(profile);
    this.setState({
      profile: profile,
    });
  };

  render() {
    const { profile } = this.state;
    return (
      <MainContext.Provider
        value={{
          profile: profile,
          setProfile: this.setProfile,
        }}
      >
        <LoginView />
        <ProfileView />
      </MainContext.Provider>
    );
  }
}

export default App;
