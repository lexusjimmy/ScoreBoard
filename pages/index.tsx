import { Container, Grid, Paper, Box, IconButton, Fab, Button } from "@material-ui/core";
import { History as HistoryButton, Add as AddButton } from "@material-ui/icons";
import ScoreBoard from "../components/ScoreBoard";
import styled from "styled-components";
const CenterTextBox = styled(Box)`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15vw;
    font-weight: bold;
`
const index = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={5}>
                    <Box textAlign={'center'}>
                        <ScoreBoard score={12}></ScoreBoard>
                        <IconButton>
                            <AddButton></AddButton>
                        </IconButton>
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

export default index;