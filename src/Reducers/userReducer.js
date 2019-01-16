const userReducer = (state = {
    fetching: false ,
    fetched: false ,
    error : null,
    user : []
},action) =>{
    switch (action.type) {
        case "FETCH_USER_PENDING":
        state = {
            ...state,
            fetching:true,
        }
            break;
        case "FETCH_USER_FULFILLED":
        state = {
            ...state,
            fetching:false,
            fetched:true,
            news: action.payload
        }
            break;
        case "FETCH_USER_ERROR":
        state = {
            ...state,
            fetching:false,
            error:action.payload

                
        }
        break;
        default:
            break;
    }
    return state;
}

export default userReducer;