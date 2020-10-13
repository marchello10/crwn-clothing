import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2>{ title }</h2>
            <div className='items'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

//selectCollection function we just wrote is not memoized due to collectionUrlParam 
//being passed in from our collection component's mapStateToProps running whenever 
//our state changes and and calling a new instance of our selectCollection function.
// In this case collectionUrlParam is a dynamic argument meaning it can change
//, so to memoize selectCollection we actually have to memoize the whole function using 
//a memoize helper function. We can leverage the lodash library, specifically their memoize helper function by adding it our packages
const mapStateToProps = (state, ownProps) => ({
    //this is necessary because unlike other selectors, this needs
    //a part of the state depending on the URL parameter
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);