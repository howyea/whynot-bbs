import {url_for, ajax_post} from '../agency_file';
export const signout = async(id, params = {}) => {
    const result = await ajax_post('/api/v2/signout', params);
   return result;
}