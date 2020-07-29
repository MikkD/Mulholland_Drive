import { createSelector } from 'reselect';


const selectUser = state => state.rootUsers;


export const selectIsCurrentUserLoggedIn = createSelector(
    [selectUser], rootUsers => rootUsers.currentUser
)