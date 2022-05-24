import axios from 'axios';
import {
    authLogin,
    authLogout,
    authCheckingFinish,
} from '../reducers/authSlice';

export const startLogin = (email, password) => {
    return async (dispatch) => {
        await axios
            .post('/login', {
                email,
                password,
            })
            .then((resp) => {
                const { user } = resp.data;
                dispatch(
                    authLogin({
                        uid: user.uid,
                        name: user.fullName,
                        rol: user.rol,
                    })
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        await axios
            .get('/logout')
            .then((resp) => {
                dispatch(authLogout());
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const startChecking = () => {
    return async (dispatch) => {
        await axios
            .get('/check')
            .then((resp) => {
                console.log(resp);
                const { user } = resp.data;
                dispatch(
                    authLogin({
                        uid: user.uid,
                        name: user.fullName,
                        rol: user.rol,
                    })
                );
            })
            .catch((error) => {
                if (window.location.pathname !== '/login') {
                    dispatch(startLogout());
                }
                dispatch(checkingFinish());
            });
    };
};

const checkingFinish = () => {
    return async (dispatch) => {
        dispatch(authCheckingFinish());
    };
};
