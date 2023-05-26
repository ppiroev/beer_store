import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="homeText">
      <h1>Discover Your Hoppy Paradise at Beerlandia!</h1>
      <Link to={"/shop"}>
      <button>Go to Shop</button>
      </Link>
      </div>
    </div>
  );
}
