import { useParams } from "react-router";

const ProductDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <div className="flex justify-center items-center mt-12 border py-4">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Product Detail Dengan Id {id}
          </h1>

          {/* Dummy UI */}
          <div className="border p-4 rounded-lg shadow-md">
            <img
              src="https://picsum.photos/300/200?random=1"
              alt="Product"
              className="mb-4 w-full rounded-md"
            />
            <h2 className="text-xl font-semibold">Nama Produk</h2>
            <p className="text-gray-600">Deskripsi singkat produk ini...</p>
            <p className="text-lg mt-2 font-bold">Rp 99.000</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
