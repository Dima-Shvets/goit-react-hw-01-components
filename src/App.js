import { Profile } from "./components/Profile";
import user from "./components/Profile/user.json";
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
