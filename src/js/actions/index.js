import axios from 'axios';
export const FETCH_BLOGS = 'fetch_blogs';
export const FETCH_HERO_BANNER = 'fetch_hero_banner';
export const FETCH_DYNAMIC_BANNER = 'fetch_dynamic_banner'


export function fetchBlogs() {
    const url = 'https://cdn.contentful.com/spaces/tsweppzq6ch3/entries?access_token=f567485edef319d2d8ee2eb85044b5c7621161059de56a4e912ab9c428621353&content_type=article'
    return function(dispatch) {
        axios.get(url)
            .then(response => {
                dispatch({ type: FETCH_BLOGS, payload: response });
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
export function fetchHeroBanner() {
    const url = 'https://cdn.contentful.com/spaces/tsweppzq6ch3/entries?access_token=f567485edef319d2d8ee2eb85044b5c7621161059de56a4e912ab9c428621353&content_type=heroBanner'
    return function(dispatch) {
        axios.get(url)
            .then(response => {
                dispatch({ type: FETCH_HERO_BANNER, payload: response });
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

    export function fetchDynamicBanner() {
        const url = 'https://cdn.contentful.com/spaces/tsweppzq6ch3/entries?access_token=f567485edef319d2d8ee2eb85044b5c7621161059de56a4e912ab9c428621353&content_type=dynamicBanner'
        return function(dispatch) {
            axios.get(url)
                .then(response => {
                    dispatch({ type: FETCH_DYNAMIC_BANNER, payload: response });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }