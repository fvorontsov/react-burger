import {urls} from "../utils/urls";

export class NormaApiClient {

    fetchIngredients() {
        return this.fetch(urls.general.ingredients)
    }

    fetch(path) {
        return fetch(`${urls.base}/${path}`, {
            method: 'GET',
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Failed to fetch data")
            }
        }).catch(error => {
            console.log(error)
        })
    }
}

export const normaApiClient = new NormaApiClient();
