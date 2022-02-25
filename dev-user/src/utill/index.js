import * as queryString from 'query-string';
import { toast } from 'react-toastify';
import axios from 'axios';
export const notify = (state,msg) => {
    switch(state) {
        case "success":
            toast.success(msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            break;
        case "error":
            toast.error(msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            break;
        default:
            break

    }
}


const stringifiedParams = queryString.stringify({
  client_id: process.env.REACT_APP_FB_ID,
  redirect_uri: `${process.env.REACT_APP_WEB_APP_URL}/authenticate/facebook/`,
  scope: ['email','public_profile','user_friends'].join(','), // comma seperated string
  response_type: 'code',
  auth_type: 'rerequest',
  display: 'touch',
});


export async function  getAccessTokenFromCode(code) {
   
  const {data} = await axios({
    url: process.env.REACT_APP_FB_ACCESS_TOKEN_URL,
    method: 'get',
    params: {
      client_id: process.env.REACT_APP_FB_ID,
      client_secret: process.env.REACT_APP_FB_SECRET,
      redirect_uri: `${process.env.REACT_APP_WEB_APP_URL}/authenticate/facebook/`,
      code,
    },
  });
  return data
};
export const facebookLoginUrl = `${process.env.REACT_APP_FB_AUTH_URL}${stringifiedParams}`;