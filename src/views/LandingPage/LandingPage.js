import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import Header from "../../components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import WhatSection from "./Sections/WhatSection";
import WhereSection from "./Sections/WhereSection";
import HowSection from "./Sections/HowSection";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="SHKL · Safe, Fast, Flexible."
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/bg.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Eliminating fraud, increasing EBITDA.</h1>
              <h4>
                Next generation security and payment solutions for businesses
                under served and ignored by traditional financial technology.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <WhatSection />
          <WhereSection />
          <HowSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
