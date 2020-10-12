import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss';

const Cart = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    (cartItems.map(
                        cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                    ) : (
                        <span className='empty-message'>Your cart is empty</span>
                    )
            }
        </div>
        <CustomButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    //reselect (memoization) - cart component doesn't rerender/recalculate when not relevant 
    //state changes, e.g. when user changes
    cartItems: selectCartItems
    //redux's mapStateToProps has a shallow equality check for every value in the object; 
    //it won't replace values if they pass a shallow equality check which means it won't needlessly re-render,
    //but here reselect is useful, because without it the value of itemCart would be recalculated, even if not changed
})

//all of our HOC return components and take components as args
//so withRouter just taking the component that got returned from connect call as 
//its component argument
//first we get connected component which will then pass in to withRouter HOC
export default withRouter(connect(mapStateToProps)(Cart))
//if we don't supply mapDispatchProps as second parameter, connect
//will pass the dispatch into out component (Cart) as a property
//if we need to make just one action it is easier than writing whole function