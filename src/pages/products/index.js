import Product from "../../Components/Product";
import { useToggleBackground } from "../../context/ToggleBackgroundContext";

const product = () => {
  const { toggleBackground } = useToggleBackground();
  return (
    // <Layout>
      <Product toggleBackground={toggleBackground} />
    // </Layout>
  );
};
export default product;
