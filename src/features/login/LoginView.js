import { Component } from "react";
import { CombineContextProvider } from "../../context/CombinedContext";

import { DepContext } from "../../context/DependeciesContext";
import { MainContext } from "../../context/MainContext";

class LoginView extends Component {
  // contextTupe dfisini bertujuan utk baca context saat ini
  // static contextType = MainContext;
  // cara lain selain atas

  // gak pake static, karena static cma ada 1

  static = async () => CombineContextProvider;

  onLogin = async () => {
    const { ctx, deps } = this.context;
    try {
      const response = await deps.services.authenticationService("doni");
      if (response) {
        ctx.setProfile({ name: response });
      }
    } catch (e) {}
  };

  render() {
    return <button onClick={this.onLogin}>Login</button>;
  }
}

// cara kedua static contextType
// altenatif lain tanpa menggunakan static
// LoginView.contextType = MainContext;

export default LoginView;
