import { Action } from '../actions'
import { ActionType } from '../actionTypes.ts'

interface RepositoriesState {
    loading: boolean
    error: string | null
    data: string[]
}

const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
    switch (action.type) {
        case ActionType.SearchRepositories:
            return { loading: true, error: null, data: [] }
        case ActionType.SearchRepositoriesSuccess:
            return { loading: false, error: null, data: action.payload }
        case ActionType.SearchRepositoriesError:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state
    }
}

export default reducer