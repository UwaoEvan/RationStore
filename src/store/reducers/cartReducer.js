const initState = {
    items: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            let newProduct = {
                id: action.payload.id,
                price: action.payload.price,
                title: action.payload.title,
                image: action.payload.image,
                qty: 1
            }
            return {
                ...state,
                items: [...state.items, newProduct]
            }
        default:
            return state;
    }
}