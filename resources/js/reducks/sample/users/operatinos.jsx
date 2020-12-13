import {signInActiom} from './actions'

export const signIn = () => {
    return async (dispatch, getState) => {
        const state = getState()
        const isSignedIn = state.testUsers.isSignedIn

        if(!isSignedIn){

            const url = 'https://api.github.com/users/isizaka-daiki'
            const response = await fetch(url)
                                .then(res => res.json())
                                .catch(() => null)
            const username = response.login
            const id = response.id

            dispatch(signInActiom({
                isSignedIn: true,
                uid: id,
                username: username
            }))
        }
    }
}
