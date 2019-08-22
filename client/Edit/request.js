import {url_for, ajax_post} from '../agency_file';
export const topic_create = async(params = {}) => {
    const result = await ajax_post('/api/v2/topic/create', params);
   return result;
}