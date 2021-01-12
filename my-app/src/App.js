import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class App extends React.Component{
  render(){
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} >
            <h1>Inteliband</h1>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation ={2}>
              <h1>about us</h1>
              <p>We are a retail tech company focused in the smartwatch field. We created 
                Inteliband to help people get assistance as soon as irregular patterns are detected in a persons vitals.
              </p>
              </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation ={2}>
              <h1>Mission Statement</h1>
              <p> Deliver the fastest possible assistance to people in need.
              </p>
              </Paper>
          </Grid>
        </Grid>
      </div>
    ); 
  }
}
export default App;
