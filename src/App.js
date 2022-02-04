import "./scss/style.css";
import Header from "./component/Header";
import Category from "./component/Category";
import Reviews from "./component/Reviews";
import ChooseUs from "./component/ChooseUs";
import Video from "./component/Video";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Reviews />
      <ChooseUs />
      <Video />
    </div>
  );
}

export default App;
