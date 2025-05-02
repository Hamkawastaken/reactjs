import { Link } from "react-router";

type Products = {
  image: string;
  title: string;
  price: number;
};

const ProductsPage = () => {
  const products: Products[] = [
    {
      image: "https://picsum.photos/300/200?random=1",
      title: "Jersey Timans Indonesia",
      price: 200000,
    },
    {
      image: "https://picsum.photos/300/200?random=2",
      title: "Sepatu Futsal Otruseight",
      price: 350000,
    },
    {
      image: "https://picsum.photos/300/200?random=3",
      title: "Kaos Putih Oblong",
      price: 50000,
    }
  ];
  return (
    <>
      <Link to={"/productDetail"} className="flex flex-row flex-wrap gap-4 justify-center items-center mt-12 border py-4">
        {products.map((product) => {
          return (
            <div className="card w-72 h-96 border border-blue-500 rounded-xl cursor-pointer">
              <div className="image">
                <img
                  src={product.image}
                  className="rounded-t-xl w-72 h-56 object-cover"
                  alt=""
                />
              </div>
              <div className="title">
                <h1 className="font-semibold text-xl px-4 mt-4">
                  {product.title}
                </h1>
                <p className="font-medium text-blue-500 px-4">Rp. {product.price}</p>
              </div>
            </div>
          );
        })}
      </Link>
    </>
  );
};

export default ProductsPage;
