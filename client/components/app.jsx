import React from 'react';
import ProductList from './product-list';
import ProductDetails from './product-details';
import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {
        }
      }
    };
  }

  // setView(name, params){
  //     this.setState({
  //       view :{
  //         name,
  //       params: {
  //       }
  //     }
  //   }
  // )

  render() {
    return (<ProductDetails/>);
  }
}
