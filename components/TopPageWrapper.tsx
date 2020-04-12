import { Container, Grid, Box, IconButton, Fab, Button } from "@material-ui/core";
import { History as HistoryButton, Add as AddButton } from "@material-ui/icons";
import ScoreBoard from "./ScoreBoard";
import styled from "styled-components";
import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";

import ScoreBoardContainer from "../container/ScoreBoardContainer"
import AddPointButtonContainer from "../container/AddPointButtonContainer";
const CenterTextBox = styled(Box)`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15vw;
    font-weight: bold;
`;
function TopPageWrapper(): ReactElement{
    
    
    return (
        <Container>
            <Grid container>
                <Grid item xs={5}>
                    <Box textAlign={'center'}>
                        <ScoreBoardContainer teamId={1}/>
                        <AddPointButtonContainer point={1} teamId={1} />
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <CenterTextBox>
                        :
                    </CenterTextBox>
                    <Box textAlign={'center'}>
                        <Fab size="medium" aria-label="history">
                            <HistoryButton></HistoryButton>
                        </Fab>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box textAlign={'center'}>
                        <ScoreBoard score={15}></ScoreBoard>
                        <Button variant="contained" size="large" color="primary">
                            <AddButton></AddButton>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default TopPageWrapper;