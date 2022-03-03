import React, { Component } from "react";
import prodArray from "./productArray";

class CartButton extends Component {
  constructor(props) {
    super(props);
    // console.log(props.toString())
    this.state = {
      id: this.props.id,
    };
  }

  render() {
    return(
        <div>
            <ul className='products'>
                {prodArray?.filter(product => product.id === 0).map(product => (
                    <div key={product.id} className='product-price'>
                        <button onClick={() => this.props.addToCart(product)}className='button primary'>Add To Cart</button>
                    </div>
                ))}
            </ul>
        </div>
    );
  }
}

export default CartButton;
