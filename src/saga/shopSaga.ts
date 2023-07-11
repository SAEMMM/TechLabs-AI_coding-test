import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { getShopFetch, getShopSuccess, getShopFailure } from "../slice/shopState";

interface PostData {
  startDate: string;
  endDate: string;
  category: string;
  keyword: string;
  timeUnit: string;
  gender: string;
  device: string;
  ages: string[];
}

const postData = async (data: PostData): Promise<AxiosResponse> => {
  const API_ID = process.env.REACT_APP_CLIENT_ID;
  const API_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const url = '/v1/datalab/shopping/category/keyword/age';

  const headers = {
    "X-Naver-Client-Id": API_ID,
    "X-Naver-Client-Secret": API_SECRET,
  };

  return axios.post<PostData>(url, data, { headers });
}

function* submitDataSaga(action: { payload: PostData }) {
  try {
    const { payload } = action;
    const response: AxiosResponse = yield call(postData, payload);
    yield put(getShopSuccess(response.data));
  } catch (error) {
    yield put(getShopFailure());
  }
}

export function* watchSubmitData() {
  yield takeLatest(getShopFetch as any, submitDataSaga);
}

export default function* shopSaga() {
  yield watchSubmitData();
}