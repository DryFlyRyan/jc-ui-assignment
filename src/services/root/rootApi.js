/**
 * 
 * Root API
 * 
 * Handles API interaction, headers, and methods.
 * 
 */

class Api {
  static request(url, options, data) {
    return fetch(url, options);
  }
  static get(url, options, data) {
    return this.request(url, {
      method: 'GET',
      ...options
    });
  }
  static delete(url, options, data) {
    return this.request(url, {
      method: 'DELETE',
      ...options
    });
  }
  static patch(url, options, data) {
    return this.request(url, {
      method: 'PATCH',
      ...options
    });
  }
  static post(url, options, data) {
    return this.request(url, {
      method: 'POST',
      ...options
    });
  }
  static put(url, options, data) {
    return this.request(url, {
      method: 'PUT',
      ...options
    });
  }
}

export default Api;