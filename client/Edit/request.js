import {url_for, ajax_post, ajax_get} from '../agency_file';
export const topic_create = async(params = {}) => {
    const result = await ajax_post('/api/v2/topic/create', params);
   return result;
}
export const topic_edit = async(params = {}) => {
    const result = await ajax_get('/api/v2/topic/'+params.id+'/edit');
   return result;
}