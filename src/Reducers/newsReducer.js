const newsReducer = (state = {
    fetching: false ,
    fetched: false ,
    error : null,
    news : []
},action) =>{
    switch (action.type) {
        case "FETCH_NEWS_PENDING":
        state = {
            ...state,
            fetching:true,
        }
            break;
        case "FETCH_NEWS_FULFILLED":
        state = {
            ...state,
            fetching:false,
            fetched:true,
            news: action.payload
        }
            break;
        case "FETCH_NEWS_ERROR":
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

export default newsReducer;