import { useState } from "react";
import Login from "./components/Login";
import Feed from "./components/Feed";

const App = () => {
  const [user, setUser] = useState("");
  // user = waaxa kujir useState
  // setUser = waxa kujir useState kubdale kartaah

  if (!user) return <Login setUser={setUser} />;

  return (
    <div>
      <h2>Hi {user}</h2>
      <button onClick={() => setUser("")}>Loguot</button>
      <Feed user={user} />
    </div>
  );
};

export default App;
