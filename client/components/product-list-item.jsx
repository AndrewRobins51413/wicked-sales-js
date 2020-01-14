import React from "react"
import ReactDOM from "react-dom"

class ProductListItem extends React.Component {
    constructor(props){
        super(props);
    }


render() {
    return(
    <div class="card" style = "width 20rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
                <h5 class="card-title">Card Title</h5>
                <p class="card-text">BigStoreCard</p>
                <a href="#" class="btn btn-primary">What's this?</a>
            </div>
        </div>
        )
    }
}