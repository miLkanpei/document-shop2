export const SIGN_IN = "SIGN_IN";
export const signInActiom = (userState) => {
  return {
    type: "SIGN_IN",
    payload:{
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username
    }
  }
};

export const SIGN_OUT = 'SIGN_OUT';
export const signOutAction = () => {
  return{
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false
    }
  }
};

export const TEST = "TEST";
export const test1 = () => {
  return{
    type: "TEST",
    payload: {
      isSignedIn: false
    }
  }
}