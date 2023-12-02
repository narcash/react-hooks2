import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
  const { products = [], addToBasket = Function.prototype } = props;

  if (!products.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className='goods'>
      {products.map(item => (
        <GoodsItem
          key={item.id}
          {...item}
          addToBasket={addToBasket}
        />
      ))}
    </div>
  );
}

export { GoodsList };
