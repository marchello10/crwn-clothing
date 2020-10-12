import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser], //array of our input selectors
    (user) => user.currentUser //function that gets a return of this input selector (user reducer)
)