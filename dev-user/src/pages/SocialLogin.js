import React, { useEffect } from 'react';
import * as queryString from 'query-string';
import { getAccessTokenFromCode } from "../utill"
import axios from "axios"
import {
    API_ADMIN_URL,
    SOCIAL_FB_LOGIN
  } from "../utill/api.endpoints";
import { history } from '../utill/index' 
const SocialLogin = () => {

    const urlParams = queryString.parse(window.location.search);
    React.useEffect(() => {
        const getAccessToken = async () => {
            const data =  await getAccessTokenFromCode(urlParams.code);
            if(data) {
                axios
                .post(`${API_ADMIN_URL}${SOCIAL_FB_LOGIN}`,{ 
                "token": data.access_token,
                "auth_type": "rerequest",
                "expires_in": data.expires_in,
                "token_type": "bearer"})
                .then((res) => {
                    localStorage.setItem('userData',JSON.stringify(res.data))
                    alert("successfully Done");
                    // history.go(-1)
                   setTimeout(() => {
                    window.close()
                   },1000) 
                   
                })
                .catch((error) => {
                    // history.go(-1)
                    window.history.go(-1)
                    console.log(error);
                });
            }
            history.push('/')
            console.log("====daat",data)
            return data
        }
      const token =   getAccessToken()
      console.log("test",token)
    },[])
    console.log(`The code is: ${urlParams.code}`);
    return(
        <>Helllo</>
    )
}
export default SocialLogin;