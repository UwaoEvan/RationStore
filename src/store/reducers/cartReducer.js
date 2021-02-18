const initState = {
    items: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            let addedProduct = action.payload;
            return state
        default:
            return state;
    }
}