import React, { Component } from 'react'

class CartButton extends Component {
    render() {
        return(
            <div>
                <ul className='products'>
                    {this.props.products?.map(product => (
                        <li key={product.id}>
                            <div className='product'>
                                <div className='product-price'>
                                    <button onClick={() => this.props.addToCart(product)}className='button primary'>Add To Cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default CartButton;