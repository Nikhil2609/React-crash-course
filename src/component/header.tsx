import React from 'react';
import { makeStyles } from "@material-ui/core/styles";


// styling in with material ui makeStyles
const useStyles: Function = makeStyles((theme) => ({
    root: {
        backgroundColor: 'lightblue',
        color: "white",
        padding: '10px',
        borderRadius: '5px',
        [theme.breakpoints.down("md")]: {
            backgroundColor: 'lightgreen',
        },
    },
    header: {
        backgroundColor: 'pink',
    }
}));

const Header = () => {
    // define styles 
    const classes = useStyles();
    return (
        <>
            <div
                // style={{ backgroundColor: "navy", color: "white" }}
                className={classes.root}
            >
                Header
                <div className={classes.header}>
                    header class
                </div>
            </div>
        </>
    );
}

export default Header;