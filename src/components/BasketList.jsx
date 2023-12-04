import React from 'react';
import BasketItem from './BasketItem';
const BasketList = props => {
  const { order = [], handleBasketShow = Function.prototype } = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Cart</li>
      {order.length ? (
        order.map(item => (
          <BasketItem
            key={item.id}
            {...item}
          />
        ))
      ) : (
        <li className='collection-item'>Cart is empty</li>
      )}
      <li className='collection-item active'>Total: {totalPrice} $ </li>
      <i
        className='material-icons basket-close'
        onClick={handleBasketShow}
      >
        close
      </i>
    </ul>
  );
};

export default BasketList;
