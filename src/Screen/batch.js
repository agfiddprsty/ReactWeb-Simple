import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import tgl from './img/tanggal.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    textAlign: 'left',
    boxShadow: 'none',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
    backgroundColor: '#685AA7'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    backgroundColor: '#685AA7',
    maxHeight: '100%',
  },
});

function ComplexGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={tgl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Bootcamp Batch 1
                </Typography>
                <Typography gutterBottom>Frontend Mobile Developer dengan React Native dan Redux</Typography>
                <br/>
                <Typography color="textSecondary">5 Mei s.d 9 Juni</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);