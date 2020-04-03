import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
      <div id="how-section" className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Joining SHKL.</h2>
            <h5 className={classes.description}>
              SHKL is currently working with businesses on an invitational basis.
              <br/>
              Check back soon to join our wait list.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
  );
}
