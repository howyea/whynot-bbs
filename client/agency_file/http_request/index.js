import request from 'superagent'
export const url_for = (resource, interfaceName, id) => {
    switch (process.env.NODE_ENV) {
        case 'development':
        case 'production':
        default:
            // let _url = `http://${resource}.que360.com/${interfaceName}`
            let _url = `${resource}/${interfaceName}`
            return id ? `${_url}/${id}` : _url
    }
}

async function interface_require(ajax_action, _url, param = null) {
    let result  = null 
    if(ajax_action == 'post') {
        result  = await request[ajax_action](_url, param).set('Content-Type','application/x-www-form-urlencoded').catch(function (error){
            alert(error);
            Toast.fail('服务器出错了！亲1',2);        
            return false
        });
    }else {
        result = await request[ajax_action](_url, param).catch(function (error){
            Toast.fail('服务器出错了！亲2',2);        
            return false
        });
    }
    return result.body;
}
export const ajax_get = async (_url, param) => {

    return await interface_require('get', _url, param)
}
export const ajax_post = async (_url, param) => {
    return await interface_require('post', _url, param)
}
export const ajax_put = async (_url, param) => {
    return await interface_require('put', _url, param)
}
export const ajax_delete = async (_url, param) => {
    return await interface_require('del', _url, param)
}