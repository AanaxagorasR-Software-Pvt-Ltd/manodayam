// export const API_HOST_URL = window.location.hostname === 'localhost' ? "http://localhost:3020" : 'https://swarnratnaindia.com/dev-apiman';
export const API_HOST_URL = process.env.REACT_APP_API_URL;
export const API_MIDD = "/api";
export const LOGIN_API = "/auth/user/login";
export const REGISTER_API = "/auth/user/new";
export const DOCTOR_API = "/auth/user/doctor";
export const PRODUCT_API = "/products/lists";
export const VIEW_PRODUCT = "/products";

export const AAD_TO_CARTLIST="/products/addtocarts"

export const ADD_ALL_CART="/products/allcart"
export const DELETE_DATA="/products/deletecart"
export const APPOINTMENT_API = "/appointments/appoint";
export const DIGITAL_HUMAN_LIBRARY_DATA_API = "/library/library-data";
export const LIBRARY_SINGLE_CALL_API = "/library-singlecall/single_appoint";
export const LIBRARY_GROUP_CALL_API = "/library-group/group_appoint";
export const BANNER_API = "/banner/bannertext";
export const DOCTOR_LIST_API = "/doctors/doctorlists";
export const PROFIL_API = "/auth/user/profil"
// export const ADD_CART_API = "/addtocarts"
export const CATEGORY_API = "/category-item/category/item";
export const SPIRITUALITY_API = "/spirituality/spirituality/item";
export const ABOUT_API = "/about/about-us"
// export const BOOKED_API = "/appointed/booklistshow"
export const BOOKED_API = "/appointments/booked";
export const MENTALHEALTH_DATA_API = "/category-data";
export const SHAKTHI_QUESTION_API = "/shakthi-ques/shakthi-asking"
export const FORGOTPASSWORD_URL="/otp/user/forgot";
export const RESETPASSWORD_URL="/otp/user/reset";
export const ALL_MENTALHEALTH_DATA_API="/category-item/category/item"
// export const MCQ = "/mcq/question"const
export const API_ADMIN_URL = API_HOST_URL + API_MIDD 
