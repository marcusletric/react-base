import { CATEGORY_API, PRODUCT_API } from '../constants/Config.js'

function parseJson(response) {
    return response.json().then(body => body.data);
}

function request(url) {
    return fetch(url).then(result => parseJson(result));
}

class Api {
    getCategories() {
        return request(CATEGORY_API);
    }

    getProducts() {
        return request(PRODUCT_API);
    }

}

export const API = new Api();
