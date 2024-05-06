import { Link } from "react-router-dom";

const EmptyCartPage = () => (
  <div className="mt-5">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
      alt="cart empty"
    />
    <h1 className="mt-3">Your Cart Is Empty</h1>

    <Link to="/">
      <button type="button" className="btn btn-primary mt-2">
        Shop Now
      </button>
    </Link>
  </div>
);

export default EmptyCartPage;
