import Header from "../components/Header/Header";
import headerImage from "../assets/beautycard.svg";

function Search() {
  const styles = {
    backgroundImage: `url(${headerImage})`
  }
  return (
    <>
    <Header className="Header" style={styles}>
      <h1>Capsule Collection</h1>
    </Header>
  </>
);
}

export default Search;