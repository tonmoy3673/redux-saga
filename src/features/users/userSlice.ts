import type { Users, UsersState } from "./userTypes";

export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS" ;
export const GET_USERS_FAILURE = "GET_USERS_FAILURE"; 

// Action Types
export type GetUsersRequestAction = {
  type: typeof GET_USERS_REQUEST;
};

export type GetUsersSuccessAction = {
  type: typeof GET_USERS_SUCCESS;
  payload: Users[];
};

export type GetUsersFailureAction = {
  type: typeof GET_USERS_FAILURE;
  payload: string | null;
};






export type UsersAction = GetUsersRequestAction | GetUsersSuccessAction | GetUsersFailureAction;


const initialState: UsersState = {
  name: "Users",
  loading: false,
  data: [],
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, loading: true, data: [], error: null };

    case GET_USERS_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };

    case GET_USERS_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };

    default:
      return state;
  }
};

//================== Action Creator =================//
export const getUserRequest = (): GetUsersRequestAction  => ({ type: GET_USERS_REQUEST });
export const getUserSuccess = (data: Users[]) : GetUsersSuccessAction => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});
export const getUserFailure = (error: null | string) : GetUsersFailureAction => ({
  type: GET_USERS_FAILURE,
  payload: error,
});
