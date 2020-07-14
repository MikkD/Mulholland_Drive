
import paginationTypes from './pagination.types';

const INITIAL_STATE = {
    clickedPaginationNumber: 1,
    totalItemsPerPage: 0,
    totalNumberOfPages: 0,
    showAllItems: false

}

const paginationReducer = (state = INITIAL_STATE, action) => {
    // console.log('action is ', action.payload)
    switch (action.type) {
        case paginationTypes.PAGINATION_NUMBER:
            return {
                ...state,
                clickedPaginationNumber: action.payload,
            }
        case paginationTypes.TOTAL_ITEMS_PER_PAGE:
            return {
                ...state,
                totalItemsPerPage: action.payload
            }
        case paginationTypes.TOTAL_NUMBER_OF_PAGES:
            return {
                ...state,
                totalNumberOfPages: action.payload
            }
        case paginationTypes.SHOW_ALL_ITEMS:
            return {
                ...state,
                showAllItems: !state.showAllItems
            }
    }
    return state
}

export default paginationReducer;