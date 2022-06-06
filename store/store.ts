import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = configureStore({ reducer: rootReducer });

export function createAction(actionType: string, payload: any, meta: any, func: Function) {
  return async (dispatch: any) => {
    dispatch({ type: actionType, payload: { payload, meta } });

    function handleResponse(response: any, type: string) {
      dispatch({ type: actionType + '_' + type, payload: { payload, meta, response } });
      return { response, meta };
    }

    try {
      const response = await func(payload);
      return handleResponse(response, 'SUCCESS');
    } catch (error) {
      return handleResponse(error, 'FAILURE');
    }
  };
}

export default store;
