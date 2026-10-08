import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentProfile from "./components/StudentProfile";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="app">
      <Header />

      <main className="container">
        {showProfile && (
          <StudentProfile
            name="Anu"
            department="CSE"
            year="3rd Year"
            count={count}
          />
        )}

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>
            Complete Practice
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </div>

        <button
          className="toggle-button"
          onClick={() => setShowProfile(!showProfile)}
        >
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>
      </main>

      <Footer />
    </div>
  );
}

export default App;