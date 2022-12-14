import MainHeader from "./components/MainHeader/MainHeader";
import PomodoroList from "./components/PomodoroList/PomodoroList";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Timer />
        <PomodoroList />
      </main>
    </>
  );
}

export default App;
