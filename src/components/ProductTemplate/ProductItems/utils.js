
export const filterItemsUtils = (items, filterType) => {
    const copy = [...items]
    switch (filterType) {
        case "By category":
            return copy.sort((a, b) => a.name > b.name ? 1 : -1)
        case "Price: Low to high":
            return copy.sort((a, b) => parseInt(a.price) > parseInt(b.price) ? 1 : -1);
        case "Price: High to low":
            return copy.sort((a, b) => parseInt(a.price) < parseInt(b.price) ? 1 : -1);
        default:
            return copy
    }
}

export const showAllItemsFilterUtils = (items, show, firstItemInRange, lastItemInRange) => {
    const copy = [...items]
    if (show) {
        return copy
    } else {
        return copy.slice(firstItemInRange, lastItemInRange)
    }
}

