import Header from "../components/Header/Header";
import headerImage from "../assets/header2.svg";
import aboutImage from "../assets/about.svg";

function About() {
  return (
    <>
      <Header image={headerImage}></Header>
      <div className="row">
        <div className="col-6">
          <h1>About Care Cosmetics</h1>
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione cum odio atque libero velit, quasi, sit accusamus dolor corrupti illo perferendis dolores distinctio nihil sint rerum temporibus placeat quod magnam?</p>
        </div>
        <div className="col-6">
          <img src={aboutImage} alt="Eyebrows"/>
        </div>
      </div>
    </>
  );
}

export default About;
