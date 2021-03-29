import React, {Component} from 'react';
import {TextField, Button, Container, Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import SchoolIcon from '@material-ui/icons/School';
import DateRangeIcon from '@material-ui/icons/DateRange';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid} from '@material-ui/core';
import 'date-fns';

//========== to create consistent spacing between the UI elements=================

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 1,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

class Profile extends Component {
  
//============ to change to next page ============
  continue = e => {
    e.preventDefault ();
    this.props.nextStep ();
  };

//============ to change to previous page ============
  back = e => {
    e.preventDefault ();
    this.props.prevStep ();
  };

  render () {
    const {values} = this.props;
    const {classes} = this.props;

    return (
      <Paper className={classes.padding}>
        <Card style={{backgroundColor: 'black',
                      color: 'white'}}>
          <CardHeader title="Education Details" />
        </Card>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="college"
                  label="College/Unviersity"
                  style={{width: '80%'}}
                  required
                  value={values.college}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="fromyear1"
                  label="From Year"
                  type="date"
                  style={{width: '80%'}}
                  required
                  value={values.fromyear1}
                  onChange={this.props.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="toyear1"
                  type="date"
                  label="To Year"
                  style={{width: '80%'}}
                  required
                  value={values.toyear1}
                  onChange={this.props.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="qualification1"
                  required
                  value={values.qualification1}
                  onChange={this.props.handleChange}
                />
              </Grid>

              <Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="description1"
                  required
                  value={values.description1}
                  onChange={this.props.handleChange}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="school"
                  label="School"
                  style={{width: '80%'}}
                  required
                  value={values.school}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="fromyear2"
                  label="From Year"
                  type="date"
                  style={{width: '80%'}}
                  required
                  value={values.fromyear2}
                  onChange={this.props.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="toyear2"
                  label="To Year"
                  type="date"
                  style={{width: '80%'}}
                  required
                  value={values.toyear2}
                  onChange={this.props.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="qualification2"
                  required
                  value={values.qualification2}
                  onChange={this.props.handleChange}
                />
              </Grid>

              <Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="description2"
                  required
                  value={values.description2}
                  onChange={this.props.handleChange}
                />
              </Grid>
            </Grid>
            <br />
        <Container className={classes.margin}>
        <Row>
            <Col lg={3} xs={0} />
            <Col lg={3} xs={5}>
              <Button
                variant="contained"
                style={{backgroundColor: 'black',
                            color: 'white'}}
                onClick={this.back}
                startIcon={<NavigateBeforeIcon />}
              >
                Back
              </Button>
            </Col>
            <Col lg={3} xs={5}>
              <Button
                variant="contained"
                style={{backgroundColor: 'black',
                            color: 'white', marginLeft:"10px"}}
                onClick={this.continue}
                endIcon={<NavigateNextIcon />}
              >
                Next
              </Button>
            </Col>
            <Col lg={3} xs={1} />
          </Row>
        </Container>
        </div>
        </CardContent>
        <p className="text-center text-muted">Page 2</p>
      </Paper>
    );
  }
}

export default withStyles (styles) (Profile);