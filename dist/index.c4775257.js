const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const toggle_switch = ()=>({
        type: TOGGLE_SWITCH
    });
const increase = (difference)=>({
        type: INCREASE,
        difference
    });
const decrease = ()=>({
        type: DECREASE
    });
const initialState = {
    toggle: false,
    counter: 0
};
//state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    //action.type에 따라 다은 작업을 처리함
    switch(action.type){
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

//# sourceMappingURL=index.c4775257.js.map
