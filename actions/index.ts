import { AddPointVariables, AddPointType } from "../types/AddPointType";
import { ActionType, BasicActionType } from "../types/BasicType";

export const addPoint = ({point = 1, teamId}: AddPointVariables): AddPointType => ({
    type: ActionType.ADD_POINT,
    payload: {
        point,
        teamId
    }
})

export const rollBack = (): BasicActionType => ({
    type: ActionType.ROLL_BACK,
    payload: {}
});
