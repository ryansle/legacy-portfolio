import React, { useState } from "react";

// Components
import {
  Typography,
  Grid,
  Modal,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import PositionHeader from "../../components/PositionHeader";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Assets
import nelnet from "../../resources/experience/nelnet.svg";
import dashboard from "../../resources/experience/chp-dashboard.png";
import funds from "../../resources/experience/chp-add-funds.png";
import payment from "../../resources/experience/chp-add-payment.png";
import merchant from "../../resources/experience/chp-merchant-details.png";
import rewards from "../../resources/experience/chp-rewards.png";
import sponsor from "../../resources/experience/chp-sponsor-details.png";

const Nelnet = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  const [openDashboard, setOpenDashboard] = useState(false);
  const [openFunds, setOpenFunds] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const [openMerchant, setOpenMerchant] = useState(false);
  const [openRewards, setOpenRewards] = useState(false);
  const [openSponsor, setOpenSponsor] = useState(false);

  const toggleDashboardModal = () => { setOpenDashboard(!openDashboard); };
  const toggleFundsModal = () => { setOpenFunds(!openFunds); };
  const togglePaymentModal = () => { setOpenPayment(!openPayment); };
  const toggleMerchantModal = () => { setOpenMerchant(!openMerchant); };
  const toggleRewardsModal = () => { setOpenRewards(!openRewards); };
  const toggleSponsorModal = () => { setOpenSponsor(!openSponsor); };

  const dash = (
    <div className={classes.overlay}>
      <Button
        className={classes.exitButton}
        size="small"
        variant="contained"
        color="secondary"
        onClick={toggleDashboardModal}
      >
        <Clear/>
      </Button>
      <img 
        className={classes.modalImage}
        src={dashboard} 
        alt="Cardholder Portal - Dashboard"
      />
    </div>
  );

  const funding = (
    <div className={classes.overlay}>
      <Button
        className={classes.exitButton}
        size="small"
        variant="contained"
        color="secondary"
        onClick={toggleFundsModal}
      >
        <Clear/>
      </Button>
      <img 
        className={classes.modalImage}
        src={funds} 
        alt="Cardholder Portal - Add Funds"
      />
    </div>
  );

  const paymentProfiles = (
    <div className={classes.overlay}>
      <Button
        className={classes.exitButton}
        size="small"
        variant="contained"
        color="secondary"
        onClick={togglePaymentModal}
      >
        <Clear/>
      </Button>
      <img 
        className={classes.modalImage}
        src={payment} 
        alt="Cardholder Portal - Add Payment Profile"
      />
    </div>
  );

  const merchantDetails = (
    <div className={classes.overlay}>
      <Button
        className={classes.exitButton}
        size="small"
        variant="contained"
        color="secondary"
        onClick={toggleMerchantModal}
      >
        <Clear/>
      </Button>
      <img 
        className={classes.modalImage}
        src={merchant} 
        alt="Cardholder Portal - Merchant Details"
      />
    </div>
  );

  const rewardsPanel = (
    <div className={classes.overlay}>
      <Button
        className={classes.exitButton}
        size="small"
        variant="contained"
        color="secondary"
        onClick={toggleRewardsModal}
      >
        <Clear/>
      </Button>
      <img 
        className={classes.modalImage}
        src={rewards} 
        alt="Cardholder Portal - Rewards Panel"
      />
    </div>
  );

  const sponsorDetails = (
    <div className={classes.overlay}>
      <Button
        className={classes.exitButton}
        size="small"
        variant="contained"
        color="secondary"
        onClick={toggleSponsorModal}
      >
        <Clear/>
      </Button>
      <img 
        className={classes.modalImage}
        src={sponsor} 
        alt="Cardholder Portal - Sponsor Details"
      />
    </div>
  );


  return (
    <div className={isSmallScreen ? classes.responsiveContainer : classes.container}>
      <PositionHeader
        website="https://nelnetinc.com/"
        image={nelnet}
        alt="Nelnet"
        title="IT Software Engineer Intern"
        dateRange="June 2020 - Now"
        stack={["React.js", "Material-UI", "AWS DynamoDB", "AWS Cognito", "Swift", "UIKit", "Figma", "XSLT"]}
      />
      <br/>
  
      <Typography variant="body1">
        Nelnet is a technology company, idea incubator, start-up accelerator, and education expert that deals primarily in 
        the administration and repayment of student loans and education financial services.
      </Typography>
      <br/>

      <Typography variant="h5" className="title">Responsibilities</Typography>
      <Typography variant="body1" component={"span"}>
        <ul>
          <li>Redevelop the front-end for the Cardholder Portal application using the React.js framework.</li>
          <li>Leverage Material-UI for faster and easier web development.</li>
          <li>Develop dynamically scalable iOS applications with Swift, UIKit, and the serverless framework.</li>
          <li>Design and develop rich, interactive user experiences utilizing the power of UIKit.</li>
          <li>Participate in an intern pod team that delivered a business proposal to senior members of the Nelnet organization, winning third place in the company-wide competition.</li>
          <li>Create XSLT transformations for the Workday team.</li>
        </ul>
      </Typography>
      <Typography variant="h5" className="title">About This Position</Typography>
      <Typography variant="body1">
        I took on a position with Nelnet after losing my previously scheduled internship thanks to the COVID-19 pandemic. I'm thankful to Nelnet's leadership
        for making the decision to reopen their intern programs to accomodate students like me whose original plans were rescinded due to the ongoing world crisis.
      </Typography>
      <br/>

      <Typography variant="body1">
        I spent my summer working on Nelnet's Workday Integrations and AGM teams, lending a hand wherever I could.
        My time was divided between writing XSLT transformations, furthering the developments of an existing
        .NET MVC codebase, and collaborating with my intern team to deliver further business opporunity proposals to Nelnet's
        executive team.
      </Typography>
      <br/>

      <Typography variant="body1">
        With the start of the fall semester, I've switched gears and joined Nelnet's Campus Key team to work once again as a mobile developer, primarily
        with up-and-coming technologies like Swift, UIKit, and Amazon Web Services like AWS Cognito and AWS DynamoDB. In this new position, I get to showcase my skills in making interactive
        user interfaces while also gaining hands-on experience with the new serverless framework, something I've been excited to work with ever since my position with
        Hoffman Strategy Group.
      </Typography>
      <br/>

      <Typography variant="body1">
        Now, I get to switch gears again and work again with my favorite toolsets - React.js and Material-UI - to redevelop the front-end for the pre-existing Cardholder Portal project,
        an administrative portal that partners with the mobile Campus Key applicaiton that I worked on previously. I'm ecstatic to be given the opportunity to once again leverage
        my web development skillsets on a project as interesting as this one, and also to work with some top-tier talent at Nelnet!
      </Typography>
      <br />

      <Typography variant="body1" color="textSecondary">
        <i>
          * The application showcased below had its wireframe designed by the talented <a href="https://www.linkedin.com/in/ericschladweiler">Eric Schladweiler</a>, our
          fellow User Experience Expert on our Campus Key team. I simply translated the contents of our Figma mockups to code.
        </i>
      </Typography>
      <br />

      <Typography variant="h5" className="title">Gallery</Typography>
      <Grid container justify="space-between">
        <img
          src={dashboard}
          alt="Cardholder Portal - Dashboard"
          className={isSmallScreen ? classes.responsiveGalleryItem : classes.galleryItem}
          onClick={toggleDashboardModal}
        />
        <img
          src={funds}
          alt="Cardholder Portal - Add Funds"
          className={isSmallScreen ? classes.responsiveGalleryItem : classes.galleryItem}
          onClick={toggleFundsModal}
        />
        <img
          src={payment}
          alt="Cardholder Portal - Add Payment Profile"
          className={isSmallScreen ? classes.responsiveGalleryItem : classes.galleryItem}
          onClick={togglePaymentModal}
        />
        <img
          src={merchant}
          alt="Cardholder Portal - Merchant Details"
          className={isSmallScreen ? classes.responsiveGalleryItem : classes.galleryItem}
          onClick={toggleMerchantModal}
        />
        <img
          src={rewards}
          alt="Cardholder Portal - Rewards"
          className={isSmallScreen ? classes.responsiveGalleryItem : classes.galleryItem}
          onClick={toggleRewardsModal}
        />
        <img
          src={sponsor}
          alt="Cardholder Portal - Sponsor Details"
          className={isSmallScreen ? classes.responsiveGalleryItem : classes.galleryItem}
          onClick={toggleSponsorModal}
        />
      </Grid>
      <br />

      <Modal
        open={openDashboard}
        onClose={toggleDashboardModal}
      >
        {dash}
      </Modal>

      <Modal
        open={openFunds}
        onClose={toggleFundsModal}
      >
        {funding}
      </Modal>

      <Modal
        open={openPayment}
        onClose={togglePaymentModal}
      >
        {paymentProfiles}
      </Modal>

      <Modal
        open={openMerchant}
        onClose={toggleMerchantModal}
      >
        {merchantDetails}
      </Modal>

      <Modal
        open={openRewards}
        onClose={toggleRewardsModal}
      >
        {rewardsPanel}
      </Modal>

      <Modal
        open={openSponsor}
        onClose={toggleSponsorModal}
      >
        {sponsorDetails}
      </Modal>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 40,
    paddingLeft: "12vw",
    paddingRight: "12vw",
    minHeight: "calc(90vh - 90px)",
  },
  responsiveContainer: {
    paddingTop: 40,
    paddingLeft: '4vw',
    paddingRight: '4vw',
    minHeight: "calc(90vh - 90px)",
  },
  galleryItem: {
    margin: "0px 5px 35px 5px",
    width: "30%",
    lineHeight: "auto", 
  },
  responsiveGalleryItem: {
    margin: 5,
    width: "80vw",
    height: "auto",
  },
  overlay: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) !important",
    background: "white",
    width: "90%",
  },
  exitButton: {
    margin: 5,
    position: "absolute",
    zIndex: 1,
    right: 0,
  },
  modalImage: {
    width: "100%",
    height: "auto",
  }
}));

export default Nelnet;