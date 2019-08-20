import {url_for, ajax_post} from '../agency_file';
export const signin = async(params = {}) => {
    const result = await ajax_post('/api/v2/signin', params);
   return result;
}