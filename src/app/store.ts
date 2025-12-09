
import { applyMiddleware, combineReducers, createStore } from 'redux';
import  createSagaMiddleware  from 'redux-saga';
import rootSaga from './rootSaga';
import { userReducer } from '../features/users/userSlice';

// =============== create saga middleware ===========//
const sagaMiddleware = createSagaMiddleware();

// ============= combine reducer ===========//
const rootReducer = combineReducers({
    users : userReducer,
});

// ==================== create store ============//
export const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

// ============= Run saga middleware =================//
sagaMiddleware.run(rootSaga);

// =============== Types ================//
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;