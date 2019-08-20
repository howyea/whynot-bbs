import {url_for, ajax_get, getQueryString} from '../agency_file';
export const activeAccount = async(params = {
    key: getQueryString('key'),
    name: getQueryString('name')
}) => {
    const result = await ajax_get('/api/v2/active_account', params);
    return result;
}