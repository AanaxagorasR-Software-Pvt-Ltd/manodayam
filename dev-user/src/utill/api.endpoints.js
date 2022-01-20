export const API_HOST_URL = window.location.hostname === 'localhost' ? "http://localhost:3020" : 'http://52.15.159.16:3020';
export const API_MIDD = "/api";
export const LOGIN_API = "/auth/user/login";
export const REGISTER_API = "/auth/user/new";
export const DOCTOR_API = "/auth/user/doctor";
export const PRODUCT_API = "/products/lists";
export const VIEW_PRODUCT = "/products";
export const APPOINTMENT_API = "/appointments/appoint";
export const DIGITAL_HUMAN_LIBRARY = "/library/library_appoint";
export const DIGITAL_HUMAN_LIBRARY_DATA_API = "/library/library-data";
export const BANNER_API = "/banner/bannertext";
export const DOCTOR_LIST_API = "/doctors/doctorlists";
export const PROFIL_API = "/auth/user/profil"
export const ADD_CART_API = "/addcarts"
export const CATEGORY_API = "/category-item/category/item";
export const SPIRITUALITY_API = "/spirituality/spirituality/item";
// export const BOOKED_API = "/appointed/booklistshow"
export const BOOKED_API = "/appointments/booked";

// export const MCQ = "/mcq/question"
export const API_ADMIN_URL = API_HOST_URL + API_MIDD 
