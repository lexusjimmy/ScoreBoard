import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { History as HistoryButton } from "@material-ui/icons";
import { Fab } from "@material-ui/core";
import { rollBack } from "../actions";

const HistoryRollBackContainer: React.FC = function HistoryRollBackContainer(): ReactElement {
  const dispatch = useDispatch();
  return (
    <Fab size="medium" aria-label="history" onClick={()=> dispatch(rollBack())}>
      <HistoryButton></HistoryButton>
    </Fab>
  );
};

export default HistoryRollBackContainer;
