import { Link, useParams } from "react-router";

const ProductPage = () => {
  const params = useParams< {productSlug: string} >();

  return (
    <>
      <div style={{ padding: "16px 44px" }}>
        <h1>Product Page</h1>

        <h3>{params.productSlug}</h3>

        <Link to="/">To Home Page</Link>
      </div>
    </>
  );
};

export default ProductPage;
