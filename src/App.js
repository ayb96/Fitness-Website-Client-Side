import "./scss/style.css";
import Header from "./component/Header";
import Category from "./component/Category";
import Reviews from "./component/Reviews";
import ChooseUs from "./component/ChooseUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Reviews />
      <ChooseUs />
    </div>
  );
}

export default App;
