/**
 * simple javascript cache
 * 
 * use localStorage
 * 
 * @author cata
 */

var jsCache = {
    
    /** 
     * Set value in Cache
     * @param {string} key
     * @param {string} value
     */
    set: function(key, value) {
        try {
            return localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            throw new Error('Cache set error for key <'+key+'> value <'+value+'>');
        }
    },
    
    
    /**
     * get value from Cache
     * @param {type} key
     * @returns {DOMString}
     */
    get: function (key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            throw new Error('Cache get error for key <'+key+'>');
        }
    },
    
     
    /**
     * Remove value from Cache
     * @param {string} key
     */
    remove: function(key) {
        return localStorage.removeItem(key);
    }
};