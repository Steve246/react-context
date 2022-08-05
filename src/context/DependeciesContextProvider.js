import { DepContext } from "./DependeciesContext";

export function DependeciesContextProvider({ children, ...services }) {
  return <DepContext.Provider value={services}>{children}</DepContext.Provider>;
}
