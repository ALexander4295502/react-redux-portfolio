import request from 'axios';
import setting from '../settings';

export const EMAIL_SEND = 'EMAIL_SEND';
export const EMAIL_SEND_REQUEST = 'EMAIL_SEND_REQUEST';
export const EMAIL_SEND_SUCCESS = 'EMAIL_SEND_SUCCESS';
export const EMAIL_SEND_FAILURE = 'EMAIL_SEND_FAILURE';

export function sendEmail(name, email, message) {
  return {
    type: EMAIL_SEND,
    promise: request.post(setting.forum_api+"contact",
      {
        name: name,
        email: email,
        message: message
      }
    )
  }
}

export function sendEmailIfNeeded(name, email, message) {
  return (dispatch) => {
    return dispatch(sendEmail(name, email, message));
  };
}