import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

class App extends React.Component {
  render() {
    return (
      <div>
        <Grid container direction="row" jutstify="space-evenly" alignItems="center" spacing={2}>
          <Grid item align="center" xs={12} sm={12}>
            <Typography variant="h2">Inteliband</Typography> <br />
            <Typography>"where our first priority is you"</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2}>
            <Typography>
              <h1>About us</h1>
              <p>
                We are a retail tech company focused in the smartwatch field. We
                created Inteliband to help people get assistance as soon as
                irregular patterns are detected in a persons vitals.
              </p>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2}><Typography>
              <h1>Mission Statement</h1>
              <p> Deliver the fastest possible assistance to people in need.</p>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2}>
              <Accordion>
                <AccordionSummary>
                  <Typography>
                    <h1>How Inteliband works</h1> <p>*click here*</p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>
                      The Inteliband works by placing a heart rate sensor on the
                      undersode of the watch and monitors for irregular vital
                      patterns and alerts the paramedics/authorities once
                      detected.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={2}>
              <Accordion>
                <AccordionSummary>
                  <Typography>
                    {" "}
                    <h1> Versions </h1> <p>*click here*</p>{" "}
                  </Typography>{" "}
                </AccordionSummary>{" "}
                <AccordionDetails>
                  <Typography>
                    <ul>
                      <li> Intelliband 0.5 15 GB </li>{" "}
                      <li> Intelliband 1.5 32 GB </li>{" "}
                      <li> Intelliband 2.0 64 GB </li>{" "}
                    </ul>{" "}
                  </Typography>{" "}
                </AccordionDetails>{" "}
              </Accordion>{" "}
            </Paper>{" "}
          </Grid>{" "}

        </Grid>
      </div>
    );
  }
}
export default App;
