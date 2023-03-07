import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProducts } from '../redux/reducer/ProductsReducer';
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';


function Products() {
  const { categoryName } = useParams();
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(`http://localhost:5000/products/categories/${categoryName}`)
      .then(res => {
        dispatch(getProducts(res.data));
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });

    return () => {
      dispatch(getProducts([]));
    }
  }, [categoryName]);

  return (
    <section className="section products" id="products">
      <div className="container products__container">
        <div className="section__title">
          <h3 className="h3 mb-3 text-capitalize">
            {
              products.length === 0 
                ? 'There are no products in this category'
                : `Category: ${categoryName}`
            }  
          </h3>
        </div>
        <div className="row">
          {
            isLoading 
              ? <Loading />
              : products.map((product) => <ProductCard key={product._id} product={product} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Products