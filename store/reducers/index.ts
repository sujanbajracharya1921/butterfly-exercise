import { UPDATE_USER_MOOD } from '../actions';

interface IUserMoodState {
  userMood: null | string;
}

const initialState: IUserMoodState = {
  userMood: null
};

export default function UserMoodReducer(state: IUserMoodState = initialState, action: any) {
  switch (action.type) {
    case UPDATE_USER_MOOD: {
      const { userMood } = action.payload;
      //   saveUserToLocalStorage(authData as IAuthUser)
      return { ...state, userMood };
    }

    default:
      return state;
  }
}
