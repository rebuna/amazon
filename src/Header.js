import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
   const handleAuthentication = () => {
     if (user) {
       auth.signOut();
     }
   };
  return (
    <div className="Header">
      <Link to="/">
        <img
          className="Header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="Header_search">
        <input className="Header_searchInput" />
        <SearchIcon className="Header_searchIcon" />
      </div>
      <div className="Header_nav">
        <Link to={!user && "/login"}>
          <div
            onClick={handleAuthentication}
            className="header__option loginfo"
          >
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user?.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__clearlink  ">
          <div className="header__option orderinfo">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">&Orders</span>
          </div>
        </Link>
        <div className="Header_option">
          <span className="Header_optionLineOne">Your</span>
          <span className="Header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <ShoppingBasket className="Header_optionBasket" />
        </Link>
        <span className="Header_optionLineTwo Header_basketCunt">
          {basket.length}
        </span>
      </div>
    </div>
  );
}

export default Header