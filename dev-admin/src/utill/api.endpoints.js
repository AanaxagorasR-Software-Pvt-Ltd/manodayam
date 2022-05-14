// export const API_HOST_URL = "http://localhost:3020";
export const API_HOST_URL = window.location.hostname === 'localhost' ? "http://localhost:3020" : 'https://swarnratnaindia.com/dev-apiman';
export const API_MIDD = "/api";
export const LOGIN_API = "/auth/user/login";
export const REGISTER_API = "/auth/user/new";
export const SUBADMIN_REGISTER_API = "/auth/subadmin/new"
export const SUBADMIN_LOGIN_API = "/auth/subadmin/login"

export const APPOINTMENT_LIST = "/appointment-list";
export const API_ADMIN_URL = API_HOST_URL + API_MIDD 
