let initialState = {
    customers: [
        {id: 1, name: 'Jane Cooper', company: 'Microsoft', phoneNumber: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: false},
        {id: 2, name: 'Floyd Miles', company: 'Yahoo', phoneNumber: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: false},
        {id: 3, name: 'Ronald Richards', company: 'Adobe', phoneNumber: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: false},
        {id: 4, name: 'Marvin McKinney', company: 'Tesla', phoneNumber: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: false},
        {id: 5, name: 'Jerome Bell', company: 'Google', phoneNumber: '(629) 555-0129', email: 'jerome@google.com', country: 'Réunion', status: false},
        {id: 6, name: 'Kathryn Murphy', company: 'Microsoft', phoneNumber: '(406) 555-0120', email: 'kathryn@microsoft.com', country: 'Curaçao', status: false},
        {id: 7, name: 'Jacob Jones', company: 'Yahoo', phoneNumber: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brazil', status: false},
        {id: 8, name: 'Kristin Watson', company: 'Facebook', phoneNumber: '(704) 555-0127', email: 'kristin@facebook.com', country: 'Åland Islands', status: false},
    ]
}

const CHANGE_STATUS = 'CHANGE_STATUS';

const customersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return {
                ...state,
                customers: state.customers.map((customer) => {
                    if (action.id === customer.id) {
                        return {...customer, status: action.status}
                    }
                    return customer;
                })
            }
        default:
            return state;
    }
}

export default customersReducer;

export const changeStatus = (id, status) => ({type: CHANGE_STATUS, id, status});
