import paginationTypes from './pagination.types';


export const action_pagination_number = (paginationNumber) => ({
    type: paginationTypes.PAGINATION_NUMBER,
    payload: paginationNumber
});
export const action_pagination_total_items_per_page = (totalItemsPerPage) => ({
    type: paginationTypes.TOTAL_ITEMS_PER_PAGE,
    payload: totalItemsPerPage
});
export const action_pagination_total_number_of_pages = (numberOfPages) => ({
    type: paginationTypes.TOTAL_NUMBER_OF_PAGES,
    payload: numberOfPages
});
export const action_showAllItems = () => ({
    type: paginationTypes.SHOW_ALL_ITEMS
});