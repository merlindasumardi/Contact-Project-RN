const initialState = {
    contactList: {},
    addContactStatus: false,
    addResponse: {}
}

const ContactReducer = (state = initialState, action) => {
    console.log('ini action', action);
    switch(action.type){
        case 'GET_CONTACT_LIST':
            return {...state, contactList: action.payload};
        case 'ADD_CONTACT':
            return {...state, addContactStatus: action.payload};
        default:
            return state;
    }
}

export default ContactReducer;