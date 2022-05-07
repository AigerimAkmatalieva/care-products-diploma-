import Header from "../../components/Header/Header";
import headerImage from "../../assets/pizza.jpg";
import "../style.css";
import Chefs from "./Chefs/Chefs";

function Delivery() {
  return (
    <>
      <Header title="Services" image={headerImage} p="Book a table">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </Header>
      <Chefs />
    </>
  );
}

export default Delivery;
