export const getQueryString = (name) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}
//批量存储
export const setStorageItems = ( obj ) => {
    const _keys = Object.keys( obj );
    const _values = Object.values( obj );
    _keys.forEach(( value, index ) => {
        localStorage.setItem(value, _values[ index ]);
    });
}