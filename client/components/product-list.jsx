import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/api/products/')
      .then(response => response.json())
      .then(productData => {
        this.setState({ products: productData });
      })
      .catch(error => `${error}`);
  }

  //   <div className="container">
  //     <div className="row">
  //       {
  //         this.state.products.map(index => (
  //           <li key={index.image} >
  //             <img className="card-img-top contain" src={index.image} alt="..."></img>
  //             <h7 className="card-body">{index.price}</h7>
  //             <h6 className="card-text">{index.shortDescription}</h6>
  //             <h5 className="card-title">{index.name} <a href="#" className="card-link">Card link</a></h5>
  //           </li>
  //         ))
  //       }
  //     </div>
  // </div>

  render() {
    return (
      <div id="root">
        <div className="container .container-fluid ">
          <div className="row">
            {
              this.state.products.map(product => (
                <ProductListItem key={product.productId} productData={product}>
                </ProductListItem>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
