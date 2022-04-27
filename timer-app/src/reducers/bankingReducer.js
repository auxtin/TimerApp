const initialState = 69420;
export const reducer = (state = initialState,action) => { 
    switch(action.type) {
        case "DEPOSIT":
            return state + action.amount;
        default: 
            return state;
    }
};
const initialRoom = "";

export const roomReducer = (state = initialRoom,action) => { 
    switch(action.type) {
        case "CREATEROOM":
            return {
                ...state,
                initialRoom: action.roomID
            }
        default:
            return state;
    }
};





// const deposit = {
//     type: "DEPOSIT",
//     amount: 20
// }

// const CREATEROOM = {
//     type:""
// }