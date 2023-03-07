import React from 'react'
import { MdStar } from "react-icons/md";
import { Link } from 'react-router-dom';

function ProductCard(props) {
  // const id = props.product._id;
  const title = props.product.title;
  const description = props.product.description;
  const image = props.product.image;
  const price = props.product.price;
  const rating = props.product.rating;

  const url = title.toLocaleLowerCase().split(' ').join('-');

  const formatText = (text, maxLenght) => {
    if (text.length <= maxLenght) return text
    return text.slice(0, maxLenght).trim() + '...';
  }

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="product-card card">
        <img src={image} alt="" className="card-img-top" />
        <div className="card-body">
          <Link to={'/' + url} className="card-title h5">{formatText(title, 50)}</Link>
          <p>{formatText(description, 40)}</p>
          <h5>{price} so'm</h5>
          <div className="d-flex align-items-center">
            <p className='d-flex align-items-center text-secondary'>
              <MdStar className='fs-5 me-1 text-warning' />
              {rating.rate}/5 ({rating.counter})
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard