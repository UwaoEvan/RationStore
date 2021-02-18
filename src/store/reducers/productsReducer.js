const initState = {
    products: [
        { id: '1', title: 'Cofee Mug', description: 'Demi-dipped in a matte black glaze, oversized mug with square handle exposes the natural clay base to graphic effect. Perfect for morning\'s first cup (and every cup after that). Serve with sweet and savory pastries on our Black Dip Platter.', image: require('../../../assets/images/mug.jpg'), price: 200, category: 'Home', location: 'Mombasa, Kenya' },
        { id: '2', title: 'Luxury Chair', description: 'Available in numerous fabric and leather options, we can assist you in creating a chair that meets your space and lifestyle needs.', image: require('../../../assets/images/seat.jpg'), price: 6000, category: 'Home', location: 'Malindi, Kenya' },
        { id: '3', title: 'Smart Phone', description: 'Power through jogs and bike rides. The custom mophie juice pack for Palm allows you to get an extra 13 hours of battery power without having to stop to recharge.', image: require('../../../assets/images/phone.jpg'), price: 8000, category: 'Technology', available: 'Available', location: 'Mariakani, Kenya' },
        { id: '4', title: 'Cdj 2000 Nexus', description: 'The CDJ 2000 Nexus 2 includes a coloured touch sensitive screen, allowing an unbeatable reactivity. Conceived with and for Pro DJs', image: require('../../../assets/images/cdj.jpg'), price: 150000, category: 'Technology', available: 'Unavailable', location: 'Wundanyi, Kenya' },
    ]
}

export default (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}