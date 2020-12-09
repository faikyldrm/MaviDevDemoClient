import axios from 'axios';
import History from '../history.js';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_FEATURE,
    FETCH_FEATUREDETAIL
} from './types';

const ROOT_URL = 'http://localhost:8091';

export const signinUser = ({ email, password }) => {
    return (dispatch) => {
        // submit email/password to the server
        axios.post(`${ROOT_URL}/v1/auth/signIn`, { username:email, password })
            .then(response => {

                // if request is good...
                // - update state to indicate user is authenticated
                dispatch({ type: AUTH_USER });

                // - save the jwt token
                localStorage.setItem('token', response.data.token);

                // - redirect to the route '/feature'
                History.push('/feature');

            }).catch(() => {
                // if request is bad...
                // - show an error to the user
                dispatch(authError('Bad Login Info'));
            });
    };
};

export const signupUser = ({ email, password, passwordConfirmation, name, surname, addressDetail, city, phone}) => {
  //  modelofReq = { username: email, password: password, matchingPassword: passwordConfirmation, name, surname, addressDetail, city, phone };
    console.log({ username: email, password: password, matchingPassword: passwordConfirmation, name, surname, addressDetail, city, phone });
    return (dispatch) => {
        // submit email/password to the server
      
        axios.put(`${ROOT_URL}/v1/auth/signUp`, { username: email, password: password, matchingPassword: passwordConfirmation, name, surname, addressDetail, city, phone})
            .then(response => {
                dispatch({ type: UNAUTH_USER });
                confirmAlert({
                    title: 'User Saved Successfully',
                    message: 'Go to Login Page',
                    buttons: [
                        {
                            label: 'Go',
                            onClick: () => History.push('/signin')
                        },
                         
                    ]
                })
                
              //  localStorage.setItem('token', response.data.token);
            //    History.push('/feature');
            })
            .catch(err => {

                dispatch(authError(err.response.data.error));
            });
    };
};

export const authError = (error) => {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};

export const signoutUser = () => {
    localStorage.removeItem('token')
    return { type: UNAUTH_USER };
};

export const fetchFeature = () => {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/v1/user/findAll`, {
            headers: { authorization:'Bearer '+ localStorage.getItem('token') }
        })
        .then(response =>{
            dispatch({
                type: FETCH_FEATURE,
                payload:   response.data  
             });
        });
    };
};
export const fetchDeatilFeature = (userID) => {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/v1/user/getUser/` + userID, {
            headers: { authorization: 'Bearer ' + localStorage.getItem('token') }
        })
            .then(response => {
                dispatch({
                    type: FETCH_FEATUREDETAIL,
                    payload: response.data
                });
             
            }).catch(() => {
                // if request is bad...
                // - show an error to the user
          
                dispatch(authError('Bad Login Info'));
            });
    };

};
