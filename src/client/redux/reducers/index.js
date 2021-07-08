const reducer = (state = { menuPreviews: [] }, action) => {
    switch (action.type) {
        case 'GET_MENUS':
            return { ...state }
        case 'MENU_RECEIVED':
            return { ...state, menus: action.result.json }
        case 'SEARCH_MENUS':
            return { ...state }
        case 'MENU_SEARCH_RECEIVED':
            return { ...state, menus: action.result.json }
        case 'ADD_MENU_PREVIEW':
            {
                const newCountDietry = createDietryCount(state.menuPreviews)
                return {
                    ...state, menuPreviews: state.menuPreviews.concat(action.payload.menu),
                    count: state.menuPreviews.length + 1, newCountDietry
                }
            }
        case 'REMOVE_MENU_PREVIEW':
            {

                const newCountDietry = createDietryCount(state.menuPreviews)
               
                return {
                    ...state, menuPreviews: state.menuPreviews.filter(menu => menu.id !== action.payload.id), count: state.menuPreviews.length - 1
                    , newCountDietry
                }
            }
        case 'REMOVE_MENU':
            return { ...state, menus: state.menus.filter(menu => menu.id !== action.payload.id) }
        default:
            return state;
    }
}

function createDietryCount(menuPreviews) {

    var dietry = [];
    var mergedDietryArray = menuPreviews.forEach(element => {
        dietry.push(...element.dietaries);
    });

    var newCountDietry = {
        v: 0,
        ve: 0,
        n: 0,
        df: 0,
        gf: 0
    }
    newCountDietry.v = dietry.filter((x) => x === 'v').length;
    newCountDietry.ve = dietry.filter((x) => x === 've').length;
    newCountDietry.n = dietry.filter((x) => x === 'n!').length;
    newCountDietry.df = dietry.filter((x) => x === 'df').length;
    newCountDietry.gf = dietry.filter((x) => x === 'gf').length;
    return newCountDietry;
}

export default reducer;