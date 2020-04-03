import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import {AssistantPhoto, BorderStyle, LocalFlorist,} from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Where is SHKL used?</h2>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                  title="Emerging Markets"
                  description="Your sector has some characteristics of a developed market, but has yet to meet the standards upheld by markets of similar verticals. (e.g. MMJ, HEMP, CBD)"
                  icon={LocalFlorist}
                  iconColor="success"
                  vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                  title="High Risk Merchants"
                  description="Your business offers goods and services that have a reputation for charge backs and fraudulent transactions. (e.g. High Volume/Price, Firearms, MLM, CNP, XXX)"
                  icon={AssistantPhoto}
                  iconColor="danger"
                  vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                  title="Unregulated Industries"
                  description="Your organization has dealings in a marketplace that is not well enough understood to define, govern, and insure. (e.g. Cryptocurrency Exchange/Brokerage, REE, UCP)"
                  icon={BorderStyle}
                  iconColor="warning"
                  vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
  );
}
