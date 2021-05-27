import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { removeItem } from '../../redux/cart/cart.actions.js';

const CheckoutItem = ({cartItem, removeItem}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={cartItem.imageUrl} alt='item'/>
        </div>
        <span className='name'>{ cartItem.name }</span>
        <span className='quantity'>{ cartItem.quantity }</span>
        <span className='price'>{ cartItem.price }</span>
        <div className='remove-button' onClick={() => removeItem(cartItem)}>&#10005;</div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    removeItem: cartItem => dispatch(removeItem(cartItem))  
})

export default connect(null, mapDispatchToProps)(CheckoutItem);