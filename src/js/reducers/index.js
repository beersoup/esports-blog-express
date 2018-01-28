import { combineReducers } from 'redux';
import fetchBlogsReducer from './fetch_blogs_reducer';
import fetchHeroBannerReducer from './fetch_hero_banner_reducer';
import fetchDynamicBannerReducer from './fetch_dynamic_banner_reducer';


const rootReducer = combineReducers({
    fetchBlogs:fetchBlogsReducer,
    fetchHeroBanner: fetchHeroBannerReducer,
    fetchDynamicBanner: fetchDynamicBannerReducer
});

export default rootReducer;