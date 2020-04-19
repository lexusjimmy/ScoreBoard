import { Container, Grid, Box, IconButton, Fab, Button } from "@material-ui/core";
import { History as HistoryButton, Add as AddButton } from "@material-ui/icons";
import ScoreBoard from "./ScoreBoard";
import styled from "styled-components";
import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";

import ScoreBoardContainer from "../container/ScoreBoardContainer"
import AddPointButtonContainer from "../container/AddPointButtonContainer";
import HistoryRollBackContainer from "../container/HistoryRollBackContainer";
import ScoreTableContainer from "../container/ScoreTableContainer";
const CenterTextBox = styled(Box)`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15vw;
    font-weight: bold;
`;
const TopPageWrapper: React.FC = function TopPageWrapper(): ReactElement{
    
    return (
        <Container>
            <Grid container>
                <Grid item xs={5}>
                    <Box textAlign={'center'}>
                        <ScoreBoardContainer teamId={1}/>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <CenterTextBox>
                        ー
                    </CenterTextBox>
                </Grid>
                <Grid item xs={5}>
                    <Box textAlign={'center'}>
                        <ScoreBoardContainer teamId={2} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={5}>
                    <Box textAlign={'center'}>
                        <AddPointButtonContainer point={1} teamId={1} />
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box textAlign={'center'}>
                        <HistoryRollBackContainer />
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box textAlign={'center'}>
                        <AddPointButtonContainer point={1} teamId={2} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <ScoreTableContainer />
                </Grid>
            </Grid>
        </Container>
    )
}

export default TopPageWrapper;
