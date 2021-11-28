import { Profile } from "./components/Profile";
import { Statistics } from "./components/Statistics";
import { FriendList } from "./components/FriendList";
import user from "./components/Profile/user.json";
import friends from "./components/FriendListItem/friends.json";
import statsData from "./components/Statistics/stats-data.json";
import "./App.css";

function App() {
  return (
    <div>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
