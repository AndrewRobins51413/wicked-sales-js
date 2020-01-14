import React from 'react'
 import ReactDOM from "react-dom"

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[]
        }   
    }

    app.get('/api/products', (req, res, next) => {
        const getProducts = `select "productId", "name", "price", "image", "shortDescription" from "products"`
        db.query(getProducts)
            .then(result => req.json(result.rows)) // drop the array index so the whole array will req/res
            .catch(err => next(err));
    });

componentDidMount(){
    this.getData();
}

    render(){
        return(
            <div className="card">
                <img className="card-img-top" src="https://github.com/Learning-Fuze/wicked-sales-js-instructions/blob/master/features/images/view-products-front-end.png?raw=true" alt="..."></img>
                <div className="card-body">
                <p className="card-text">Buy The Things!</p>
                </div>        
            </div>
        );
    }
}


// class ProductListItem extends React.Component {
//     render(){
//         return(
//             <div className="card">
//                 <img className="card-img-top" src="https://github.com/Learning-Fuze/wicked-sales-js-instructions/blob/master/starter-files/server/public/images/tater-mitts.jpg?raw=true" alt="..."></img>
//                 <div className="card-body">
//                 <p className="card-text">Get the Tater Mitts!</p>
//                 </div>        
//             </div>
//         );
//     }
// }
export default ProductList;


