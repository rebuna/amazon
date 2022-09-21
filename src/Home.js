import Search from '@material-ui/icons/Search';
import React from 'react'
import Dropdown from './Dropdown';
import './Home.css'
import Product from './Product';
import SearchEl from './SearchEl';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71JXMLnpUhL._SX3000_.jpg"
          alt=""
        />
        <div className="home_row first_row">
          <Product
            // className="first_product"
            id="1234"
            title="Women's Fashion"
            price={10.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71-XEPHht5L._AC_UL320_.jpg"
          />

          <Product
            className="second_product"
            id="12345"
            title="Men's Fashion"
            price={20.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61DSf-iLZML._AC_UL320_.jpg"
          />
        </div>
        <br /> <br /> <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="home_row second_row">
          <Product
            id="12346"
            title="Small space solutions"
            price={10.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/OWFhYjJmNGIt/OWFhYjJmNGIt-NzIwODU5ZmIt-w379._CB405958196_SY304_.jpg"
          />
          <Product
            id="12347"
            title="Save on pre-owned Amazon devices"
            price={10.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjAwMjVmYjUt/YjAwMjVmYjUt-YmMzZGJjMzYt-w379._CB410321238_SY304_.jpg"
          />
          <Product
            id="12348"
            title="Live plants & planters"
            price={10.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MjJkZGVlZDYt/MjJkZGVlZDYt-OGRmN2JmYWEt-w379._CB410698465_SY304_.jpg"
          />
        </div>
        <div className="home_row third_row">
          <Product
            id="12349"
            title="Sony 55 Inch 4K Ultra HD TV X90K Series: Playstation® 5 XR55X90K- 2022 Model"
            price={1000.99}
            rating={1}
            image="https://tse2.mm.bing.net/th?id=OIP.6ZeVggt4m_GLVM-NCQ_aIQHaEK&pid=Api&P=0"
          />
        </div>
        <br /> <br /> <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="home_row second_row fourth">
          <Product
            id="123466"
            title="Smart bluetooth body weight scale"
            price={20.99}
            rating={1}
            image="https://m.media-amazon.com/images/I/31n2jehdPxL._SY500__AC_SY200_.jpg"
          />
          <Product
            id="123477"
            title="Ailun screen protector for iphone pro-13"
            price={14.99}
            rating={1}
            image="https://m.media-amazon.com/images/I/71ncIkBW8qL._AC_SY200_.jpg"
          />
          <Product
            id="123488"
            title="Live plants & planters"
            price={15.99}
            rating={1}
            image="https://m.media-amazon.com/images/I/51KKR5uGn6L._AC_SY200_.jpg"
          />
        </div>
        {/* ********* */}
        <div className="home_row second_row fourth">
          <Product
            id="1234666"
            title="16 pieces makeup brushes"
            price={20.99}
            rating={1}
            image="https://m.media-amazon.com/images/I/71ppOZ9v-LL._AC_UL320_.jpg"
          />
          <Product
            id="1234777"
            title="360 makeup rotating organizer"
            price={11.99}
            rating={1}
            image="https://m.media-amazon.com/images/I/71EBAOuEUpL._AC_UL320_.jpg"
          />
          <Product
            id="1234888"
            title="Almay biodegradable oil free eye makeup remover "
            price={18.99}
            rating={1}
            image="https://m.media-amazon.com/images/I/71M5COKFpYL._AC_UL320_.jpg"
          />
        </div>
        <div>
          <SearchEl />
          <Dropdown/>
        </div>
      </div>
    </div>
  );
}

export default Home