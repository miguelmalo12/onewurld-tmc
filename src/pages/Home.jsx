import Hero from "../components/Hero";
import Main from "../components/Main";

function Home() {
  return (
    <>
      <Hero title="Corporate Travel Simplified" subtitle="Wherever you want to go next, see what’s possible with oneWurld." showButton={true} />
      <Main />
    </>
  );
}

export default Home;
