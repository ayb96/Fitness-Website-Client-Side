import "./scss/style.css";
import Header from "./component/Header";
import Category from "./component/Category";
import Reviews from "./component/Reviews";
import ChooseUs from "./component/ChooseUs";
import Video from "./component/Video";
import Blog from "./component/Blog";
import Subscribe from "./component/Subscribe";
import Footer from "./component/Footer";
import SliderNew from "./component/SliderNew";
import VirtualTour from "./component/VirtualTour";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <VirtualTour /> */}
      <SliderNew />
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
