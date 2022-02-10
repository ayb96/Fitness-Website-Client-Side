import "./scss/style.css";
import Header from "./component/Header";
import Category from "./component/Category";
import Reviews from "./component/Reviews";
import ChooseUs from "./component/ChooseUs";
import Video from "./component/Video";
import Blog from "./component/Blog";
import Subscribe from "./component/Subscribe";
import Footer from "./component/Footer";
import Slider from "./component/Slider";
import MainSlider from "./component/MainSlider";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Category />
      <Reviews />
      <ChooseUs />
      <Video />
      <Blog />
      <Subscribe />
      <Footer />
      {/* <MainSlider /> */}
    </div>
  );
}

export default App;
