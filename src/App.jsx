import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Components/Login";
import AdminDashboard from "./Components/AdminDashboard";
import TeacherDashboard from "./Components/TeacherDashboard";
import { AuthProvider } from "./Hooks/AuthProvider";
import ProtectedRoute from "./Hooks/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <section className="container mx-auto max-w-screen-2xl">
          <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute path="/admin" component={AdminDashboard} />
            <ProtectedRoute path="/teacher/:name" component={TeacherDashboard} />
            <Redirect to="/" />
          </Switch>
        </section>
      </Router>
    </AuthProvider>
  );
}

export default App;