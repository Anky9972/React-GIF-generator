import "./App.css";
import Random from "./Components/Random";
import Search from "./Components/Search";

function App() {
  return (
    <div className="bg-dark vh-100 vw-100 d-flex justify-content-center flex-column align-items-center ">
      <h1 className="bg-light w-75 rounded-pill d-flex justify-content-center flex-column align-items-center fs-3">
        Generate GIFs
      </h1>
      <div className="vh-80 my-3 d-flex justify-content-center flex-column">
        <Random />
        <Search />
      </div>
    </div>
  );
}

export default App;
