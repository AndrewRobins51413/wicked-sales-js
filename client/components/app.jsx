import React from 'react';
import ProductList from './product-list';
// import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }

  render() {
    return <ProductList/>;

  }
}

// <Header/>,
