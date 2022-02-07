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

function App() {
  var viewport_meta = document.getElementById("root");
  console.log("viewport_meta", viewport_meta);
  var viewports = {
    default: viewport_meta.getAttribute("content"),
    landscape: "width=1920",
  };
  console.log("viewports", viewports);
  console.log("window.innerHeight", window.innerHeight);
  console.log("window.innerWidth", window.innerWidth);
  var viewport_set = function () {
    if (Screen.width > 768)
      viewport_meta.setAttribute("root", viewports.landscape);
    else viewport_meta.setAttribute("content", viewports.default);
  };
  viewport_set();
  window.onresize = function () {
    viewport_set();
  };
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
    </div>
  );
}

export default App;
