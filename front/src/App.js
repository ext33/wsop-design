import './Styles/App.sass'
import Nav from "./Components/Nav";
import MainPage from "./Components/Pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* router view */}
      <MainPage/>
    </div>
  );
}

export default App;
