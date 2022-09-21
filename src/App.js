import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header'
import Home from './Home';
import {BrowserRouter as Router, Routes,Route, Link,} from 'react-router-dom'
import CheckOut from './CheckOut';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Login from './Login';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
const promise = loadStripe(
  "pk_test_51LaA6JGpCfiM1kwfECOtC0mTMvSThpkWhztWac4rxbxfDj1HRyKe0ENMl71F7ivHXmFxEfttynAFUGUTHqpcjygo003eouLoa3"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <CheckOut />
              </>
            }
          />
<Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
