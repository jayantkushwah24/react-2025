import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";

export const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?ga=GA1.1.704082917.1750601295&semt=ais_hybrid&w=740"
          alt="Food App Logo"
        />
      </div>
      <nav className="nav-items">
        <ul>
          <li>{onlineStatus ? "🟢" : "You are offline 🔴"}</li>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About Us</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact Us</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
