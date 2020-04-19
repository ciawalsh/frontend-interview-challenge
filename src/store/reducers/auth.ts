import {AnyAction} from 'redux';
// import AuthActions from '@waterlevel/types/auth.enums';

export const initialState: AuthState = {
  user: 'Eddie Murphy',
};

export function auth(state = initialState, action: AnyAction): AuthState {
  switch (action.type) {
    default:
      return state;
  }
}
