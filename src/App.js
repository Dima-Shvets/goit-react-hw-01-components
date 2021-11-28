import { Profile } from "./components/Profile";
import { Statistics } from "./components/Statistics";
import { FriendList } from "./components/FriendList";
import { TransactionHistory } from "./components/TransactionHistory";
import { Container } from "./components/Container";
import user from "./components/Profile/user.json";
import friends from "./components/FriendListItem/friends.json";
import statsData from "./components/Statistics/stats-data.json";
import transactions from "./components/TransactionHistory/transactions.json";
import "./App.css";

function App() {
  return (
    <div>
      <Container>
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
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={statsData} />
      </Container>
      <Container>
        <FriendList friends={friends} />
      </Container>
      <Container>
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
}

export default App;
