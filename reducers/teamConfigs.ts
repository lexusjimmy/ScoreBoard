import { TeamConfigType, EditTeamConfigAction } from "../types/TeamConfigType"
import { ActionType } from "../types/BasicType";

const initTeamConfigState: TeamConfigType[] = [
    {teamId: 1, name: ''},
    {teamId: 2, name: ''},
]
const teamConfigs = (state = initTeamConfigState, action: EditTeamConfigAction): TeamConfigType[] => {
    switch (action.type) {
        case ActionType.EDIT_TEAM_NAME:
            const targetTeamConfig = state.find(teamConfig => teamConfig.teamId === action.payload.teamId);
            const resultTeamConfig: TeamConfigType = {...Object.assign({}, targetTeamConfig), name: action.payload.name};
            return [...state.filter(teamConfig => teamConfig.teamId !== action.payload.teamId), resultTeamConfig];
        default:
            return state;
    }
}

export default teamConfigs;
