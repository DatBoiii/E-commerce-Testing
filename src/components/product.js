
import React from 'react'
import '../css/product.css'
import Reviews from './review'
import prodArray from './productArray'
import Cart from './Cart'
import CartButton from './CartButton'
// import addtoFavorite from ''


class Product extends React.Component {
  constructor( props ) {
    super( props )
    // console.log(props.toString())
    this.state = {
      id: this.props.id,
      products: prodArray,
      cartItems: JSON.parse(localStorage.getItem('cartItems'))? JSON.parse(localStorage.getItem('cartItems')): [],
    }
  }

  createOrder = (order) => {
    alert("Need to save order for " + order.name )
}

removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({cartItems: cartItems.filter(x=>x.id !== product.id)})
    localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));
}

addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let isInCart = false;
    cartItems.forEach(item => {
        if(item.id === product.id) {
            item.count++;
            isInCart = true;
        }
    });
    if(!isInCart) {
        cartItems.push({...product, count: 1})
    }
    this.setState({cartItems});
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

  render() {
    return (
      <div className='product'>
        <h1>PC: {prodArray[this.state.id].name}</h1>
        <img src={prodArray[this.state.id].imageUrl} alt={prodArray[this.state.id].imageAlt} className='plantImage' />
        <h2>PC: {prodArray[this.state.id].price}</h2>
        {
          prodArray[this.state.id].description.map( ( indDesc ) => {
            return <li>{indDesc}</li>
          } )
        }
        <CartFunction products={this.state.products} addToCart={this.addToCart}></CartFunction>
        <Cart cartItems={this.state.cartItems} removeFromCart = {this.removeFromCart}/>
        {/* component to change isFavorite -> True */}
        {/* <Favorite id={this.state.id} /> */}
        <p hidden>NOTE: Bottom 3 no-show on Home</p>
        <br />
        <Reviews />
      </div>
    )
  }
}

export default Product
