import React from 'react';
import ProductListItem from './product-list-item';
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
    return <ProductListItem/>;

  }
}

// <Header/>,
