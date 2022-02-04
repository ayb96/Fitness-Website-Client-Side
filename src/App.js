import "./scss/style.css";
import Header from "./component/Header";
import Category from "./component/Category";
import Reviews from "./component/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Category/>
      <Reviews/>
    </div>
  );
}

export default App;
