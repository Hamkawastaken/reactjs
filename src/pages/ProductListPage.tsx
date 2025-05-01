import { useSearchParams } from "react-router";

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortValueChange = (sortvalue : string) => {
    searchParams.set("sort", sortvalue)

    setSearchParams(searchParams)
  }

  return (
    <>
      <div style={{ padding: "16px 44px" }}>
        <h1>Product List Page</h1>

        <ul>
            <li>Sort : {searchParams.get("sort")}</li>
            <li>Name : {searchParams.get("name")}</li>
        </ul>

        <div style={{display: "flex", flexDirection: "row", gap: "12px"}}>
        <button onClick={() => handleSortValueChange("price asc")}>Sort price asc</button>
        <button onClick={() => handleSortValueChange("price dsc")}>Sort price dsc</button>
        <button onClick={() => handleSortValueChange("pupular")}>popular</button>
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
