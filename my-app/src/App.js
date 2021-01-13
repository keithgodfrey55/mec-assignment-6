import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class App extends React.Component {
  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          jutstify="space-evenly"
          alignItems="baseline"
          spacing={2}
        >
          <Grid item align="center" xs={12} sm={12}>
            <Typography variant="h2">Inteliband</Typography> <br />
            <Typography>"where our first priority is you"</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2}>
              <Typography>
                <h1>About us</h1>
                <p>
                  We are a retail tech company focused in the smartwatch field.
                  We created Inteliband to help people get assistance as soon as
                  irregular patterns are detected in a persons vitals.
                </p>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2}>
              <Typography>
                <h1>Mission Statement</h1>
                <p>
                  Deliver the fastest possible assistance to people in need.
                </p>
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
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2}>
              <Accordion>
                <AccordionSummary>
                  <Typography>
                    <h1> Versions </h1> <p>*click here*</p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <ul>
                      <li> Intelliband 0.5 15 GB </li>
                      <li> Intelliband 1.5 32 GB </li>
                      <li> Intelliband 2.0 64 GB </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2}>
              <Accordion>
                <AccordionSummary>
                  <Typography>
                    <h1> Device Setup </h1> <p>*click here*</p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <ol>
                      <li> 1. Set device passcode </li>
                      <li> 2. Set voice recognizer </li>
                      <li> 3. Set fingerprint </li>
                    </ol>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="contained" color="primary" onClick={() => { alert('IOS 6+ and higher, Android 8.0 and higher')}}>
                Compatible Devices
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2}>
              <Typography>
                <h1>
                  North America Corporate Contacts
                </h1>
                <h3>
                  United States
                </h3>
                <li>
                  Inteliband Media Helpline (408) 974-2042
                </li>
                <li>
                  Inteliband Software Upgrade Center (800) 840-8436
                </li>
                <li>
                  Reseller Referral (Reseller, Trainers, Consultants)
                  (800) 564-9412
                </li>
                <h3>
                  Canada
                </h3>
                <li>
                  Inteliband Store (Consumer and Education Individuals)
                  (800) 857-3438
                </li>
                <h3>
                  Mexico
                </h3>
                <li>
                  Inteliband Store (Consumer and Education Individuals)
                  (001-800-857-3438)
                </li>
                <li>
                  Inteliband Store (Small Business) 001-800-857-3438
                </li>
                
                
                
              </Typography>
            </Paper>
          </Grid>
           <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2}>
              <Typography>
                <h1>
                  Frequently Requested Info
                </h1>
                <h3>
                  Inteliband Login Support
                </h3>
                <p>
                  Learn more about logins and its benefits.
                </p>
                <a href="http://localhost:3000/">Learn more ></a>
                <h3>
                  Inteliband Products
                </h3>
                <p>
                Find out how to get additional technical support and hardware service options for your Inteliband products.
                </p>
                <a href="http://localhost:3000/">Learn more ></a>
                <h3>
                  Repair and Services
                </h3>
                <p>
                  See all your repair and services options based on your product and location.
                </p>
                <a href="http://localhost:3000/">Learn more ></a>
                <h3>
                  Repair Status
                </h3>
                <p>
                Quickly and easily get the status of one or all of your repairs.
                </p>
                <a href="http://localhost:3000/">Learn more ></a>
                <h3>
                  Job Opportunities
                </h3>
                <p>
                Find current openings, college jobs, internships, and more.
                </p>
                <a href="http://localhost:3000/">Learn more ></a>
                <h3>
                Media and Analyst Info
                </h3>
                <p>
                Get press releases, media contacts, and more.
                </p>
                <a href="http://localhost:3000/">Learn more ></a>
                <h3>
                Email Subscriptions
                </h3>
                <p>
                Update your email address or change your subscription status.
                </p>
                <a href="http://localhost:3000/">Learn more ></a>
                <h3>
                User Groups
                </h3>
                <p>
                Mix and mingle with other Inteliband Users in your area.
                </p>
                <a href="http://localhost:3000/">Learn more ></a>
              </Typography>
              </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2}>
              <Typography>
              <h1>
              Feedback
              </h1>
              <p>Tell us how we’re doing. Select the appropriate feedback option (we read everything, but can’t always respond):</p>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="contained" color="primary" >
            <a href="http://localhost:3000/">Scroll to Top ^</a>
              </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default App;

