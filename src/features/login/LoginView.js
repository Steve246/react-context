import { Component } from "react";
import { MainContext } from "../../context/MainContext";

class LoginView extends Component {
  // contextTupe dfisini bertujuan utk baca context saat ini
  // static contextType = MainContext;
  // cara lain selain atas

  render() {
    // caranya ini

    // const { setProfile } = this.context;
    // sih setProfile akan jadi global
    return (
      <MainContext.Consumer>
        {(ctx) => {
          console.log("login", ctx);
          return (
            <>
              <button
                onClick={() =>
                  ctx.setProfile({
                    name: "doni",
                  })
                }
              >
                Login
              </button>
            </>
          );
        }}
      </MainContext.Consumer>
    );
  }
}

// cara kedua static contextType
// altenatif lain tanpa menggunakan static
// LoginView.contextType = MainContext;

export default LoginView;
