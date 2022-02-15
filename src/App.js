import "./scss/style.css";
import Header from "./component/Header";
import Category from "./component/Category";
import Reviews from "./component/Reviews";
import ChooseUs from "./component/ChooseUs";
import Video from "./component/Video";
import Blog from "./component/Blog";
import Subscribe from "./component/Subscribe";
import Footer from "./component/Footer";

import SlideTest from "./component/SlidetTest";
import SliderNew from "./component/SliderNew";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SliderNew/>
      {/* <SlideTest /> */}
      <Category />
      <Reviews />
      <ChooseUs />
      <Video />
      <Blog />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
