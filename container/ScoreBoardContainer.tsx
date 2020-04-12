import { ReactElement } from "react"
import ScoreBoard from "../components/ScoreBoard"
import { useSelector } from "react-redux"
import { StoreStateType } from "../types/BasicType"

type ScoreBoardContainerProps = {
    teamId: number;
}

// const selectTeamPoint = createSelector(
//     state=> state.teamPoints,
//     teamPoints => 
// )

const ScoreBoardContainer: React.FC<ScoreBoardContainerProps> = function ScoreBoardContainer (props): ReactElement{
    const teamScore: number = useSelector((state: StoreStateType)=> {
        let accumScore: number = 0;
        state.teamPoints.filter(teamPoint=> teamPoint.teamId === props.teamId).map((teamPoint)=> {
            accumScore += teamPoint.point
        });
        return accumScore;
    })
    return <ScoreBoard score={teamScore} />
}

export default ScoreBoardContainer;
