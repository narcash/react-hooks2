import React, { useState, useEffect } from 'react';
import { API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';

export const Shop = () => {
  const [products, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  const addToBasket = item => {};
  useEffect(function getGoods() {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        data.daily && setGoods(data.daily);
        setLoading(false);
      });
  }, []);
  return (
    <div className='container content'>
      <Cart quantity={order.length} />
      {/* {loading ? <Preloader /> : <GoodsList products={products} />} */}
    </div>
  );
};
