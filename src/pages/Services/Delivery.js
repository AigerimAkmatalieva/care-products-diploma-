import Header from "../../components/Header/Header";
import headerImage from "../../assets/pizza.jpg";
import servicesImages from "../../assets/services.jpg";
import services1Images from "../../assets/services1.jpg";
import services2Images from "../../assets/services2.jpg";
import services3Images from "../../assets/services3.jpg";
import "../style.css";

function Delivery() {
  return (
    <>
      <Header title="Services" image={headerImage} p="Book a table">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </Header>
      <div className="container">
        <h1 style={{ color: "white", textAlign: "center" }}>
          Our master chefs
        </h1>
        <div className="row">
          <div className="col-3">
            <div className="card" style={{ color: "orangered", textAlign: "center", backgroundColor: "white" }}>
              <img src={servicesImages} alt="chefs" className="logotip" style={{borderRadius: "50%", width: "250px"}}/>
              <h2>Elon Mask</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ color: "orangered", textAlign: "center", backgroundColor: "white" }}>
              <img src={services1Images} alt="chefs" className="logotip" style={{borderRadius: "50%", width: "250px"}}/>
              <h2>John Pedro</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ color: "orangered", textAlign: "center", backgroundColor: "white" }}>
              <img src={services2Images} alt="chefs" className="logotip" style={{borderRadius: "50%", width: "250px"}}/>
              <h2>Jan Mask</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ color: "orangered", textAlign: "center", backgroundColor: "white" }}>
              <img src={services3Images} alt="chefs" className="logotip" style={{borderRadius: "50%", width: "250px"}}/>
              <h2>Elon Mask</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivery;
