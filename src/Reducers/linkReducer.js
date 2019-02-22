const linkReducer = (state = {
    fetching: false ,
    fetched: false ,
    error : null,
    link : []
},action) =>{
    switch (action.type) {
        case "FETCH_LINK_PENDING":
        state = {
            ...state,
            fetching:true,
        }
            break;
        case "FETCH_LINK_FULFILLED":
        state = {
            ...state,
            fetching:false,
            fetched:true,
            link: action.payload
        }
            break;
        case "FETCH_LINK_ERROR":
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

export default linkReducer;