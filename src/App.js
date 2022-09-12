import React, { useState } from 'react';
import MinMax from './MinMaxLazy';
import ProductCard from './ProductCard';

export default function App () {
  const [products, setProducts] = useState(productsStub());

  const setCnt = (id, cnt) => {
    // массив products иммутабелен. если его изменим, то список не перерендерится. поэтому создаем новый массив newProducts
    // (при этом оперативка не замусоривается т.к. newProducts копирует товары по ссылке)

    // const newProducts = [...products];
    // const productInd = products.findIndex(product => product.id === id);
    // const newProduct = { ...products[productInd] };
    // newProduct.cnt = cnt;
    // newProducts[productInd] = newProduct;
    // setProducts(newProducts);
    setProducts(
      products.map(product => product.id === id
        ? ({
            ...product,
            cnt
          })
        : product)
    );
  };

  const removeProduct = id => {
    setProducts(
      products.filter(product => product.id !== id)
    );
  };

  return <div>
    <h1>Products List</h1>
    <table>
      <tbody>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Price</th>
          <th>Cnt</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
        { products.map((product, i) => (
          <tr key={ product.id }>
            <td>{ i + 1 }</td>
            <td>{ product.title }</td>
            <td>{ product.price }</td>
            <td>
              <MinMax current={ product.cnt } max={ product.rest } onChange={ cnt => setCnt(product.id, cnt) }/>
            </td>
            <td>{ productTotal(product) }</td>
            <td><button type="button" onClick={ () => removeProduct(product.id) }>x</button></td>
          </tr>
        )) }
      </tbody>
    </table>
    <div>
      <b>Total: </b>
      { products.reduce((acc, product) => acc + productTotal(product), 0) }
    </div>
    <hr/>
    <ProductCard/>
  </div>;
}

function productTotal (product) {
  return product.price * product.cnt;
}

function productsStub () {
  return [
    {
      id: 100,
      title: 'Iphone 14',
      price: 1000,
      rest: 10,
      cnt: 1
    },
    {
      id: 101,
      title: 'Pixel 6a',
      price: 450,
      rest: 5,
      cnt: 1
    },
    {
      id: 102,
      title: 'Nothing Phone',
      price: 500,
      rest: 2,
      cnt: 1
    }
  ];
}
