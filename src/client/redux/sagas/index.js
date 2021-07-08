import {put, takeLatest, all} from 'redux-saga/effects';
import { Menu_URL } from '../../utils/constant';

function* fetchMenus(){
  const response = yield  fetch(Menu_URL).then((response) => response.json());

  yield put({ type: "MENU_RECEIVED", result:{json:response.items,count:response.items.length}})
}

function* fetchSearchedMenus(action){
    const response = yield  fetch(Menu_URL+"/"+action.payload.searchString).then((response) => response.json());
  
    yield put({ type: "MENU_SEARCH_RECEIVED", result:{json:response.searchedItems}})
}

function* watchFetchMenus(){
    yield takeLatest('GET_MENUS',fetchMenus)
}

function* watchSearchMenus(action){
    yield takeLatest('SEARCH_MENUS',fetchSearchedMenus)
}

export default function* rootSaga() {
    yield all ([watchFetchMenus(),watchSearchMenus()]);
}