import axios from 'axios'
import { ActionType } from '../actionTypes.ts'
import { Dispatch } from 'redux'
import { Action } from '../actions'

const searchRespositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SearchRepositories
        })
        try {
            const { data } = (await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            })) as { data: { objects: Array<{ result: { package: { name: string }} }>}}
            dispatch({
                type: ActionType.SearchRepositoriesSuccess,
                payload: data.objects.map(x => x.result.package.name),
            })
        } catch (error: any) {
          dispatch({
            type: ActionType.SearchRepositoriesError,
            payload: error.message
          })  
        }
    }
}
