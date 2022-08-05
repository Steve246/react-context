import { Component } from "react";
import { MainContext } from "../../context/MainContext";

class LoginView extends Component {
  // contextTupe dfisini bertujuan utk baca context saat ini
  static contextType = MainContext;
  // cara lain selain atas

  render() {
    // caranya ini

    const { setProfile } = this.context;
    // sih setProfile akan jadi global
    return (
      <div>
        <button onClick={() => setProfile({ name: "doni" })}>Login</button>
      </div>
    );
  }
}

// cara kedua static contextType
// altenatif lain tanpa menggunakan static
// LoginView.contextType = MainContext;

export default LoginView;
