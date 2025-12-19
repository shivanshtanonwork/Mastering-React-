import { Routes, Route } from "react-router-dom";
import UserContainer from "./containers/UserContainer";
import useWindowSize from "./hooks/useWindowSize";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";
import userAuth from "./hoc/userAuth";

function App() {
  const { width, height } = useWindowSize();
  const CheckDashboard = userAuth(Dashboard);
  const CheckUserProfile = userAuth(UserProfile);
  return (
    <>
      <UserContainer />
      <div>
        Window Size : {width} X {height}
      </div>
      <hr />
      <Routes>
        <Route path="/dashboard" element={<CheckDashboard name="Shivansh" />} />
        <Route path="/userProfile" element={<CheckUserProfile />} />
        <Route
          path="/"
          element={<div>HOC component Welcome to login page</div>}
        />
      </Routes>
    </>
  );
}

export default App;
