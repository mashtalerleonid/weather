import Spinner from "react-loader-spinner";
import { Container } from "./Loader.styled";

function Loader() {
  return (
    <Container>
      <Spinner type="ThreeDots" color="#d6683c" height={60} width={100} />
    </Container>
  );
}

export default Loader;
