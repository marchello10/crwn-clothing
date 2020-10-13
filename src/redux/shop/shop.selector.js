import memoize from 'lodash.memoize';

import { createSelector } from 'reselect';
import collectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

//converts object into array
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    //it gets all of the keys (not values) of an object and puts in array
    //we have to convert, because we want to call collections.map
    collections => Object.keys(collections).map(key => collections[key])
)

// By wrapping this function is memoize, we're saying that whenever this function 
// gets called and receives collectionUrlParam, I want to memoize the return of this 
// function (in this case we return a selector). If this function gets called again 
// with the same collectionUrlParam, don't rerun this function because we'll return 
// the same value as last time, which we've memoized so just return the selector that's
//  been stored.
export const selectCollection = memoize(collectionUrlParam => (
    createSelector(
        [selectCollections],
        collections => 
        //data normalization:
        //  collections.find(
        //     collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
        collections[collectionUrlParam]
    )
));