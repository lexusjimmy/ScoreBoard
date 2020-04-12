import { DefaultRootState } from "react-redux";
import { TeamPointType } from "./AddPointType";

export interface BasicActionType {
    type: ActionType;
    payload: {};
}

export enum ActionType {
    ADD_POINT = 'ADD_POINT',
    MINUS_POINT = 'MINUS_POINT'
}

export type StoreStateType = DefaultRootState & {
    teamPoints: TeamPointType[];
}