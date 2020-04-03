import React from "react";
import {HashLink as Link} from 'react-router-hash-link';
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Link to="#what-section" color="transparent" className={classes.navLink}>
            What
          </Link>
          <Link to="#where-section" color="transparent" className={classes.navLink}>
            Where
          </Link>
          <Link to="#how-section" color="transparent" className={classes.navLink}>
            How
          </Link>
        </ListItem>
      </List>
  );
}
