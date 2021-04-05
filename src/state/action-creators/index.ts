import axios from 'axios'
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchREpositories = (term: string) => {
    return async (dispach: any) => {
        dispach({
            type: ActionType.SEARCH_REPOSITORIES
        })

        try {
            const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            })

            const names = data.objects.map((result: any) => {
                return result.package.name
            })

            dispach({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })

        } catch (err) {
            dispach({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            })
        }
    } 
}