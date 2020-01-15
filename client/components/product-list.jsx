import React from 'react';
// import ReactDOM from "react-dom"

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
      .catch(error => `${err}`);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {
            this.state.products.map(index => (
              <li key={index.image} >
                <img className="card-img-top contain" src={index.image} alt="..."></img>
                <h7 className="card-body">{index.price}</h7>
                <h6 className="card-text">{index.shortDescription}</h6>
                <h5 className="card-title">{index.name} <a href="#" className="card-link">Card link</a></h5>
              </li>
            ))
          }
        </div>

        {/* <div className="menu-heading">
                    <img className="card-img-top" src="https://github.com/Learning-Fuze/wicked-sales-js-instructions/blob/master/features/images/view-products-front-end.png?raw=true" alt="..."></img>
                    <div className="card-body">
                        <p className="card-text">Buy The Things!</p>
                    </div>
                </div> */}
      </div>
    );
  }
}

export default ProductList;
