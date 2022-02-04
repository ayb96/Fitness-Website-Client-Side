import "./scss/style.css";
import Header from "./component/Header";
import Category from "./component/Category";
import Reviews from "./component/Reviews";
import ChooseUs from "./component/ChooseUs";
import Video from "./component/Video";
import Blog from "./component/Blog";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Reviews />
      <ChooseUs />
      <Video />
      <Blog />
    </div>
  );
}

export default App;
