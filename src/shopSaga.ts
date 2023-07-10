import { call, put, takeEvery } from "redux-saga/effects";
import { getShopFailure, getShopSuccess } from "./shopState";

function* workGetShopFetch(): Generator<any, any, any> {
  try {
    const shop = yield call(fetchShopData);
    const formattedShop = yield shop.json();
    yield put(getShopSuccess(formattedShop));
  } catch (error) {
    yield put(getShopFailure());
  }
}

function fetchShopData() {
  // API 요청 함수를 구현하여 네이버 쇼핑 인사이트 API를 호출하고 응답을 반환
  const API_ID = process.env.REACT_APP_CLIENT_ID;
  const API_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const url = `https://openapi.naver.com/v1/datalab/shopping/category/keyword/age`;

  const headers = new Headers();
  headers.append("X-Naver-Client-Id", API_ID);
  headers.append("X-Naver-Client-Secret", API_SECRET);

  return fetch(url, {
    headers: headers,
  });
}

function* shopSaga(): Generator<any, any, any> {
  yield takeEvery("shop/getShopFetch", workGetShopFetch);
}

export default shopSaga;
