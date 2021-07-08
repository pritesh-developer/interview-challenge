const reducer = (state = { menuPreviews: [] }, action) => {
    switch (action.type) {
        case 'GET_MENUS':
            return { ...state }
        case 'MENU_RECEIVED':
            return { ...state, menus: action.result.json }
        
        default:
            return state;
    }
}


export default reducer;