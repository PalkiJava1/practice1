const INIT_STATE = {
    isChecked: false,
};
export const checkreducer = (state = INIT_STATE, action) => {
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
