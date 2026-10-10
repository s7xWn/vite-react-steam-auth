import "./App.css";
import { SteamLoginButton } from "./SteamLoginButton";

function App() {
  return (
    <>
      <h1 className="bg-gradient-to-r from-sky-300 via-blue-500 to-indigo-400 bg-clip-text text-transparent text-9xl font-bold tracking-tight flex items-start">
        Welcome back. <SteamLoginButton />
      </h1>
    </>
  );
}

export default App;
