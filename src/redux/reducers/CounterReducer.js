import * as Actions from '../actions/actionTypes'

const CounterReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case Actions.COUNTER_INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case Actions.COUNTER_DECREMENT:
            if(state.count > 0){
            return Object.assign({}, state, {
               count: state.count - 1
            });
        }
        default:
            return state;
    }
}

export default CounterReducer;