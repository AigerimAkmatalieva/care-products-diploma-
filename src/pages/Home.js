import Header from "../components/Header/Header";
import headerImage from "../assets/header.svg";

function Home() {
  return (
    <>
      <Header
        title="Welcome to our cosmetics shop!"
        image={headerImage}>
        A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry. Just like ordinary cherries, the coffee fruit is also a so-called stone fruit. Even though the coffee beans are not technically beans, they are referred to as such because of their resemblance to true beans.
      </Header>
    </>
  );
}

export default Home;
