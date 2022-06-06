export const UPDATE_USER_MOOD = 'UPDATE_USER_MOOD';

export const updateUserMood = (userMood: string) => {
  return {
    type: UPDATE_USER_MOOD,
    payload: { userMood }
  };
};
