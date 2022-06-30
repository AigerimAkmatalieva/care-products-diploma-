import Header from "../components/Header/Header";
import headerImage from "../assets/rolly.jpg";
import Map from "./Home/Map/Map";

function About() {
  return (
    <>
      <Header title="About Us" image={headerImage} p="Book a table">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </Header>
      <Map />
    </>
  );
}

export default About;
