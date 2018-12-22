import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { BorderColor, Delete, Add } from "@material-ui/icons";
import React, { Component, Fragment } from "react";
import { isMobile } from "react-device-detect";
import AppButton from "../common/appButton";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
});

class Companies extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <Fragment>
        <div className="card border-secondary mb-3">
          <div className="card-header">
            <div className="row">
              <div className={`col-md-7 col-sm-12 ${isMobile && "text-center"}`}>
                <Typography variant="h5">Companies</Typography>
              </div>
              <div className={`col-md-5 col-sm-12 ${isMobile ? "text-center" : "text-right"}`}>
                <AppButton label="Add Company" variant="contained" color="secondary" icon={Add} />
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <div className={classes.root}>
                  <List className={classes.root}>
                    <ListItem button alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={require("../../assets/sampleCompanyLogo.png")} />
                      </ListItemAvatar>
                      <ListItemText
                        primary="SM Development Corporation"
                        secondary={
                          <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                              SM Development Corporation (SMDC) is a residential real-estate developer in the Philippines.
                            </Typography>
                          </React.Fragment>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton>
                          <BorderColor />
                        </IconButton>
                        <IconButton>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem button alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar src={require("../../assets/sampleCompanyAyala.jpg")} />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Ayala Land Inc."
                        secondary={
                          <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                              Ayala Land, Inc. is a real estate firm based in the Philippines. It is a subsidiary of Ayala Corporation.
                            </Typography>
                          </React.Fragment>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton>
                          <BorderColor />
                        </IconButton>
                        <IconButton>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Companies);
