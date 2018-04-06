import React, {Component} from 'react';

import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props){ 
        super(props) 

        this.state = {
            image_URL: '',
            product_name: '',
            price: 0,
        };
}
    handleInputChange1(value){
            this.setState({image_URL: value})
        }

    handleInputChange2(value){
            this.setState({product_name: value})
        }

    handleInputChange3(value){
            this.setState({price: value})
    }

    handleClick1(){
            this.setState({})
    }
    
    render(){ 
        return( 
            <div>Dashboard
                <Product/>
                <input value={this.state.image_URL}
                    placeholder='URL' 
                    ref='image_URL'
                    onChange={(e) => this.handleInputChange1(e.target.value)}/>
                <input value={this.state.product_name}
                    placeholder='Product Name' 
                    ref='product_name'
                    onChange={(e) => this.handleInputChange2(e.target.value)}/>
                <input value={this.state.price}
                    placeholder='Price' 
                    ref='price'
                    onChange={(e) => this.handleInputChange3(e.target.value)}/>
                <button onClick={this.handleClick1}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}


export default Dashboard;