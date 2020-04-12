import { AddPointVariables, AddPointType } from "../types/AddPointType";
import { ActionType } from "../types/BasicType";

export const addPoint = ({point = 1, teamId}: AddPointVariables): AddPointType => ({
    type: ActionType.ADD_POINT,
    payload: {
        point,
        teamId
    }
})


