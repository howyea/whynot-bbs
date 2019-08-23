import {url_for, ajax_get} from '../agency_file';
export const topicDetail = async(id, params = {}) => {
    const result = await ajax_get('/api/v2/topic/'+id, params);
   return result;
}