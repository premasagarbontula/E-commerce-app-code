import { Layout } from "antd";
import React from "react";
import { useSearch } from "../context/Search";

const SearchResults = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length === 0
              ? "No Products Found"
              : `${values?.results.length} Products Found`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-image/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">{p.name}</h5>
                    <div className="d-flex">
                      <p className="fw-bold fs-5">{p.rating}</p>
                      <img
                        src="https://www.freeiconspng.com/thumbs/star-icon/star-icon-32.png"
                        alt="star"
                        className="mt-1"
                        height={"22px"}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="card-text fs-5">by {p.brand}</p>
                    <p className="fw-bold fs-5">Rs {p.price}/-</p>
                  </div>
                </div>
                <div className="mb-3 ms-2 d-flex justify-content-center">
                  <button className="btn btn-primary me-2">More Details</button>
                  <button className="btn btn-secondary ms-2">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
