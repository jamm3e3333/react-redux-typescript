import { ActionType } from '../actionTypes.ts'

export interface SearchRepositoriesAction {
    type: ActionType.SearchRepositories
}

export interface SearchRepositoresSuccessAction {
    type: ActionType.SearchRepositoriesSuccess
    payload: string[]
}

export interface SearchRepositoriesErrorAction {
    type: ActionType.SearchRepositoriesError
    payload: string
}

export type Action =
    | SearchRepositoriesAction
    | SearchRepositoresSuccessAction
    | SearchRepositoriesErrorAction