import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { push } from 'connected-react-router';

const Auth = ({children}) => {

    const selector = useSelector(state => state)
    const isSignedIn = selector.testUsers.isSignedIn;
    const dispatch = useDispatch()
    console.log(selector.users);
    console.log(children);

    useEffect( () => {
        if(!isSignedIn){
            return dispatch(push('/login'));
        }
    }, [] )

    if(!isSignedIn){
        return <></>;
    } else {
        return children;
    }
}

export default Auth;