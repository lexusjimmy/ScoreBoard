import { BasicActionType } from "./BasicType"

// use | to extend type and have different kind of payload
export type EditTeamConfigAction = EditTeamNameAction;

export type EditTeamNameAction = BasicActionType & {
    payload: EditTeamNameVariables;
}

export type EditTeamNameVariables = {
    teamId: number;
    name: string;
}

export type TeamConfigType = {
    teamId: number;
    name: string;
}