import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('/api/products/')
      .then(response => response.json())
      .then(productData => {
        this.setState({ products: productData });
      })
      .catch(error => `${error}`);
  }

  handleClick() {
    setView(props);
  }

  render() {
    return (
      <div id="root">
        <div className="container .container-fluid ">
          <div className="row">
            <button onClick={this.props.handleClick}></button>
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
