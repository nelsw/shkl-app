import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import {AttachMoney, Fingerprint,} from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>What does SHKL do?</h2>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                  title="Transaction Security"
                  description="Confirm the identity of your customer (KYC), validate potential permits or licenses (DL, MMJ, CWP), and verify payment authenticity before the checkout process."
                  icon={Fingerprint}
                  iconColor="danger"
                  vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                  title="Payment Integrations"
                  description="Affirm the desires of your customer (LYC), support mobile payments (Venmo, Cash App), endorse digital payments (Zelle), and accept cryptocurrency (Coinbase, BRD)."
                  icon={AttachMoney}
                  iconColor="success"
                  vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
  );
}
