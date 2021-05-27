import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions.js';

const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={cartItem.imageUrl} alt='item'/>
        </div>
        <span className='name'>{ cartItem.name }</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{ cartItem.quantity }</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{ cartItem.price }</span>
        <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    clearItemFromCart: cartItem => dispatch(clearItemFromCart(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem)),
    removeItem: cartItem => dispatch(removeItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);