import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch('/api/products/*')
      .then(response => response.json())
      .then(productData => {
        this.setState({ product: productData });
      })
      .catch(error => console.error(error));
  }

  render() {
    if (this.state.product === null) {
      return (null);
    }
    return (
      <div id="root">
        <div className="container card w-75">
          <div className=".col-sm-4 card">
            <img className="card-img-top img-fluid" src={this.state.product.image} alt="Boo!"></img>
            <div className="card-body">
              <h5 className="card-title h2 text-center ">{this.state.product.name}</h5>
              <h6 className="card-subtitle mb-2 muted">${parseInt(this.state.product.price) / 100}</h6>
              <p className="card-text">{this.state.product.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
