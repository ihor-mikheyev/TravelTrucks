import css from "./HomePage.module.css";
import Container from "../../components/Container";
import Button from "../../components/Button/Button";
function HomePage() {
  return (
    <>
      <div className={css.hero}>
        <Container>
          <div className={css.heroContent}>
            <div className={css.text}>
              <h1>Campers of your dreams</h1>
              <p>You can find everything you want in our catalog</p>
            </div>
            <Button className="">View Now</Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
