import React from 'react';

function ProductListItem(props) {

  return (
    <div className="card container w-50">
      <div className="row">
        <div className=".col-sm-4 card">
          <img className="card-img-top img-fluid" src={props.productData.image} alt="..."></img>
          <div className="card-body">
            <h5 className="card-title h2 text-center ">{props.productData.name}</h5>
            <h6 className="card-subtitle mb-2 muted">${parseInt(props.productData.price) / 100}</h6>
            <p className="card-text">{props.productData.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
