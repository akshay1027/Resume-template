import React, {Component} from 'react';
import {TextField, Button, Container, Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import axios from 'axios';
import {saveAs} from 'file-saver';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import LinkIcon from '@material-ui/icons/Link';
import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid} from '@material-ui/core';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 1,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

class Projects extends Component {
  continue = e => {
    e.preventDefault ();
    this.props.nextStep ();
  };

  back = e => {
    e.preventDefault ();
    this.props.prevStep ();
  };

  createAndDownloadPDF = () => {

    const server1 = process.env.NODE_ENV === "production"
    ? "https://resume-template-pec.herokuapp.com/create-pdf"
    : "http://localhost:8081/create-pdf";
     
    const server2 = process.env.NODE_ENV === "production"
    ? "https://resume-template-pec.herokuapp.com/fetch-pdf"
    : "http://localhost:8081/fetch-pdf";

    axios
      .post (server1, this.state)
      .then (() => {
        axios
          .get (server2, {responseType: 'blob'})
          .then (res => {
            const pdfBlob = new Blob ([res.data], {type: 'application/pdf'});
            saveAs (pdfBlob, 'Resume.pdf');
          })
          .catch (err => {
            console.log (err);
          });
      })
      .catch (err => {
        console.log (err);
      });
  };

  render () {
    const {values} = this.props;
    const {classes} = this.props;

    return (
      <Paper className={classes.padding}>
        <Card style={{backgroundColor: 'black',
                      color: 'white'}}>
          <CardHeader title="Projects Developed" />
        </Card>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item xs={12} lg={12}>
                <h5>Project 1</h5>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title1"
                  label="Title"
                  style={{width: '80%'}}
                  required
                  value={values.title1}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="link1"
                  label="Link"
                  style={{width: '80%'}}
                  required
                  value={values.link1}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="projectDescription1"
                  label="Description"
                  style={{width: '80%'}}
                  required
                  value={values.projectDescription1}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item xs={12} lg={12}>
                <h5>Project 2</h5>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title2"
                  label="Title"
                  style={{width: '80%'}}
                  required
                  value={values.title2}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="link2"
                  label="Link"
                  style={{width: '80%'}}
                  required
                  value={values.link2}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="projectDescription2"
                  label="Description"
                  style={{width: '80%'}}
                  required
                  value={values.projectDescription2}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item xs={12} lg={12}>
                <h5>Project 3</h5>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title3"
                  label="Title"
                  style={{width: '80%'}}
                  value={values.title3}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="link3"
                  label="Link"
                  style={{width: '80%'}}
                  value={values.link3}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="projectDescription3"
                  label="Description"
                  style={{width: '80%'}}
                  value={values.projectDescription3}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
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
                            color: 'white', marginLeft:"20px"}}
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
        <p className="text-center text-muted">Page 3</p>
      </Paper>
    );
  }
}

export default withStyles (styles) (Projects);