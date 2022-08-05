import { CombineContext } from "./CombinedContext";
import { DepContext } from "./DependeciesContext";
import { MainContext } from "./MainContext";

const CombineContext = (props) => {
  return (
    <DepContext.Consumer>
      {(deps) => (
        <MainContext.Consumer>
          {(ctx) => {
            <CombineContext.Provider value={{ ctx, deps }}>
              {props.children}
            </CombineContext.Provider>;
          }}
        </MainContext.Consumer>
      )}
    </DepContext.Consumer>
  );
};
