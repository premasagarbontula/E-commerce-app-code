import { Layout } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);

  //initial product details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );

      setProduct(data?.product); //product comes from single product controller
      getSimilarProducts(data?.product._id, data?.product.category._id); //once we get single product we show related products
    } catch (error) {
      console.log(error);
    }
  };

  //get similar products
  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/similar-products/${pid}/${cid}`
      );

      setSimilarProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container">
        <div className="row p-4">
          <div className="col-md-5">
            <img
              src={`/api/v1/product/product-image/${product._id}`}
              className="card-img-top"
              alt={product.name}
              style={{ borderRadius: "25px" }}
            />
          </div>

          <div className="col-md-6 mt-4">
            <h1 className="product-name">{product.name}</h1>
            <p className="fs-3 fw-bold">Rs {product.price}/-</p>
            <div className="d-flex">
              <div className="d-flex me-3">
                <p className="fs-5 fw-bold">{product.rating}</p>
                <img
                  src="https://www.freeiconspng.com/thumbs/star-icon/star-icon-32.png"
                  alt="star"
                  className="mt-1"
                  height={"22px"}
                />
              </div>
              <p className="fs-5">{product.reviews} Reviews</p>
            </div>
            <p className="fs-5">{product.description}</p>

            <div className="label-value-container">
              <p className="fs-5 fw-bold">
                Brand :<span className="fw-light fs-4"> {product.brand}</span>
              </p>
              <p className="fs-5 fw-bold">
                Category :
                <span className="fw-light fs-4">
                  {" "}
                  {product?.category?.name}
                </span>
              </p>
            </div>
            <hr className="horizontal-line" />
            <button className="btn btn-secondary ms-2">Add To Cart</button>
          </div>
        </div>

        <div className="row">
          <h2>Similar Products</h2>
          {similarProducts.length === 0 && (
            <p className="text-center fs-2 text-danger">
              No Similar Products Found
            </p>
          )}
          <div className="d-flex flex-wrap">
            {similarProducts?.map((p) => (
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
                <div className="mb-3 ms-2">
                  <button className="btn btn-secondary ms-1">
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

export default ProductDetails;
