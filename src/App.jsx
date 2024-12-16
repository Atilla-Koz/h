import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Layout/Home";

export default function App() {
  return (
    <>
      <Switch>
          <Route path="/">  

          <Home/>

          </Route>
      </Switch>
    </>
  )
}