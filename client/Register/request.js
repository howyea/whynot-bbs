import {url_for, ajax_post} from '../agency_file';
export const signup = async(params = {}) => {
    const result = await ajax_post('/signup', params);
   return result;
}