import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { GET_USERS_REQUEST, getUserFailure, getUserSuccess } from "./userSlice";
import type { Users } from "./userTypes";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

// ============ fetchUserApi ================ //

const fetchUserApi = () => {
  return axios.get(baseUrl);
};

// ============= generator function =========//

// ===================== Worker Saga =============//
function* fetchUsersWorker(): Generator<any> {
  try {
    const response: { data: Users[] } = yield call(fetchUserApi);
    yield put(getUserSuccess(response.data));
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`Failed to Fetch Data ${err.message}`);
      yield put(getUserFailure(err.message));
    } else {
      console.error(`Unknown Error Found ${err}`);
      yield put(getUserFailure(String(err)));
    }
  }
}

// ================ Watcher Saga ================//
export function* usersSaga() {
  yield takeLatest(GET_USERS_REQUEST, fetchUsersWorker);
}
