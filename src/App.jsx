import { useState } from "react";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState("");

  if (!user) return <Login setUser={setUser} />;

  return (
    <div>
      <h2>Hi {user}</h2>
      <button onClick={() => setUser("")}>Loguot</button>
    </div>
  );
};

export default App;
