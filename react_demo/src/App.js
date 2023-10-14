import './App.css';
import GeneralInfo from "./components/GeneralInfo";
import Method from "./components/Method";
import Comment from "./components/Comment";

function App() {
  return (
    <>
      <h1 className="heading1">Goat Cheese and Chorizo Rolls</h1>
      <GeneralInfo />
      <Method />
      <Comment />
    </>
  );
}

export default App;
