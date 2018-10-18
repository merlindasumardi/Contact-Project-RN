import axios from 'axios';

export const getContactList = ()=> {
    return (dispatch) => {
        axios.get('https://simple-contact-crud.herokuapp.com/contact').then((response) => {
            console.log('get contact list');
            console.log('print ini',response);
            dispatch({
                type: 'GET_CONTACT_LIST',
                payload: response.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const addContactList = (data) => {
    return (dispatch) => {
        axios.post('https://simple-contact-crud.herokuapp.com/contact', data)
            .then((response) => {
                console.log(response);
                dispatch({
                    type: 'ADD_CONTACT',
                    payload: (response.status === 201) ? true : false
                })     
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export const deleteContactList = (data) => {
    console.log(data);
    const url = `https://simple-contact-crud.herokuapp.com/contact/${data.id}`;
    console.log(url);
    return (dispatch) => {
        axios.delete(url)
            .then((response) => {
                console.log(response);
                dispatch({
                    type: 'ADD_CONTACT',
                    payload: (response.status === 201) ? true : false
                })     
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export const updateContactList = (data) => {
    console.log(data);
    const url = `https://simple-contact-crud.herokuapp.com/contact/${data.id}`;
    console.log(url);

    const dataUpdate = {
        firstName: data.firstName,
                lastName: data.lastName,
                age: data.age,
                photo: data.photo
    }

    console.log('ini data update', dataUpdate);
    return (dispatch) => {
        axios.put(url, dataUpdate).then((response) => {
            console.log(response);
            dispatch({
                type: 'ADD_CONTACT',
                payload: (response.status === 201) ? true : false
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }
}