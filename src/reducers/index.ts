
const initialState = {
    test: "abc",
    dt: new Date()
}

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case 'REFRESH_TIME':
            return {
                ...state,
                test: 'def',
                dt: new Date()
            }
    }
    return state;
}