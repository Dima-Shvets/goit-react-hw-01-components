import logo from "./logo.svg";
import Profile from "./profile/Profile";
import user from "./profile/user.json";
import "./App.css";

function App() {
  return (
    <Profile
      userName={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}

export default App;
