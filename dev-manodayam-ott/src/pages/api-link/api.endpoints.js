// api ott 
export const API_HOST_URL = window.location.hostname === 'localhost' ? "http://localhost:3020" : 'http://52.15.159.16:3020';
export const API_MIDD = "/api";
export const SHAKTHI_SLEEP_API = "/shakthi-sleep/lists";
export const SHAKTHI_MEDITATE_API = "/shakthi-meditate/lists";
export const SHAKTHI_MUSIC_API = "/shakthi-music/lists";
export const SHAKTHI_MASTERCLASS_API = "/shakthi-masterclass/lists";
export const SHAKTHI_BODY_API = "/shakthi-body/lists";
export const SHAKTHI_SCENE_API = "/shakthi-scene/lists";

export const API_ADMIN_URL = API_HOST_URL + API_MIDD 