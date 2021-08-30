import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})

const Home = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">Display and Add Users</Typography>
            <Box style={{display: 'flex'}}>
               <h2>Click on any nav link to see the system</h2>
            </Box>
        </Box>
    )
}

export default Home;