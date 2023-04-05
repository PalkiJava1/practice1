const INIT_STATE = {
    isChecked: false,
};
const checkreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "IS_CHECKED":
            return {
                ...state,
                isChecked: action.payload
            }

        default:
            return state
    }
}
export default checkreducer;