import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class App extends React.Component{
  render(){
    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} >
            <h1>Inteliband</h1>
          </Grid>
          <Grid item>
            <Paper elevation ={2}>about us</Paper>
          </Grid>
        </Grid>
      </div>
    ); 
  }
}
export default App;
