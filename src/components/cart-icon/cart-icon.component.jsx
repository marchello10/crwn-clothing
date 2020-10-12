import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    //if quantity doesn't change, we don't want to rerender everything
    //we have to cache previous quantity to check (memoization, reselect)
    itemCount: selectCartItemsCount
    // Due to itemCount being a primitive (integer), redux will do a shallow 
    // equality check under the hood between state changes in mapStateToProps. 
    // In this case having a selector does not save us on any re-renders of 
    // the CartIcon component. If our overall state changes but the itemCount 
    // value stays the same between these changes,  redux's shallow equality 
    // check will see that itemCount is the same value as last time and save us 
    // a re-render. It's still valuable to keep the logic for the reduce in a 
    // selector though because we do still want to memoize the calculation of 
    // itemCount (our reduce logic), and without a selector our reduce logic 
    // would still be running on every state change regardless of the final 
    // calculated value of itemCount.
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);