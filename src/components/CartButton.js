import React, { Component } from 'react'

class CartButton extends Component {
    render() {
        return(
            <div>
                <ul className='Checkout'>
                    {this.props.products?.map(product => (
                        <li key={product.id}>
                            <div className='product'>
                                    <img src={product.imageUrl} alt={product.name}></img>
                                    <p>{product.name}</p>
                                <div className='product-price'>
                                    <div>
                                        ${product.price}
                                    </div>
                                    <button onClick={() => this.props.addToCart(product)}className='button primary'>
                                        Add To Cart
                                    </button>
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
