
import React from 'react'
import '../css/product.css'
import Reviews from './review'
import prodArray from './productArray'
import Cart from './Cart'
import CartButton from './CartButton'
import { Link } from 'react-router-dom'
// import addtoFavorite from ''


class Product extends React.Component {
  constructor( props ) {
    super( props )
    // console.log(props.toString())
    this.state = {
      id: this.props.id,
    }
    
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
        <div style={{ fontSize: '32px'}}>
          <Link to='/Checkout' className='nav-link'>Buy Yours Today!</Link>
          </div>
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
