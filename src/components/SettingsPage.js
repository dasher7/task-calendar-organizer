import React from "react";
import { Anchor, Box, Heading, Text } from "grommet";

//I CAN USE ROUTE TO MANAGE THE CHANGING OF THE RIGHT PART OF THE PAGE

export const SettingsPage = props => (
  <>
    <Box direction="row" wrap={true} justify="center">
      <Box
        direction="column"
        width="25vw"
        height="40vh"
        margin={{ right: "small" }}
        elevation="medium"
        round="small"
        border={{ color: "border", size: "small", side: "all" }}
      >
        {/*settings*/}
        <Box margin="small">
          <Heading level="2">Setting</Heading>
          <Box margin={{ left: "medium" }}>
            <Anchor label="Profile" color="black" margin={{ top: "small", bottom: "small" }} />
            <Anchor label="Privacy" color="black" margin={{ top: "small", bottom: "small" }} />
            <Anchor label="Theme" color="black" margin={{ top: "small", bottom: "small" }} />
            <Anchor label="Setting" color="black" margin={{ top: "small", bottom: "small" }} />
          </Box>
        </Box>
      </Box>

      <Box
        direction="column"
        width="65vw"
        elevation="medium"
        round="small"
        border={{ color: "border", size: "small", side: "all" }}
      >
        {/*details*/}
        <Box margin="small">
          <Heading level="2">Profile details</Heading>
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Name:
            </Text>
            <Text>Andrea</Text>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Surname:
            </Text>
            <Text>Bredice</Text>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Username:
            </Text>
            <Text>andreabredice</Text>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Picture:
            </Text>
            <Anchor>change profile picture</Anchor>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Age:
            </Text>
            <Text>25</Text>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Date of birth:
            </Text>
            <Text>08/07/1993</Text>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Email:
            </Text>
            <Text>bredice@bredice.it</Text>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Password:
            </Text>
            <Anchor>View password</Anchor>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Password:
            </Text>
            <Anchor>change password</Anchor>
          </Box>
          {/* end row for display an info */}
        </Box>

        {/*details*/}
        <Box margin="small">
          <Heading level="2">Privacy</Heading>
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }}>
              <strong>1.</strong>
              <br />
              Information usage We will collect and use information only in the ways disclosed in this statement. We
              collect information from all registered users such as: email, name, company name and address in order to
              create an account for you. We may also send you newsletters to your email address. To opt out of these
              emails, please see the Newsletter section below. We also collect billing and credit card information to
              process your subscription request and to convert your free trial into paid account. If you share a project
              with other users, they are part of your friend network and can access your name and email.
            </Text>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }}>
              <strong>2.</strong>
              <br />
              Information sharing We may provide your personal information to companies that provide services to help us
              with our business activities such as payment processing, emailing communications or offering customer
              service. These companies are authorized to use your personal information only as necessary to provide
              these services to us. We will share your personal information with third parties only in the ways that are
              described in this privacy statement. We may also disclose your personal information: as required by law,
              such as to comply with a Court Order, or similar legal process when we believe in good faith that
              disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate
              fraud, or respond to a government request to any other third party with your prior consent to do so if
              Mockup Builder is involved in a merger, acquisition, or sale of all or a portion of its assets, you will
              be notified via email and/or a prominent notice on our Web site of any change in ownership or uses of your
              personal information, as well as any choices you may have regarding your personal information.
            </Text>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }}>
              <strong>3.</strong>
              <br />
              Information related to data collected through the Mockup Builder application Mockup Builder collects
              information under the direction of its Clients, and has no direct relationship with the individuals whose
              personal data it processes. We collect information for our clients, if you are a customer of one of our
              Clients and would no longer like to be contacted by one of our Clients that use our service, please
              contact the client that you interact with directly. We may transfer personal information to companies that
              help us provide our service. Transfers to subsequent third parties are covered by the provisions in this
              Statement regarding notice and choice and the service agreements with our Clients. We have no direct
              relationship with the individuals whose personal data it processes. An individual who seeks access, or who
              seeks to correct, amend, or delete inaccurate data should direct his query to the Mockup Builder’s Client
              (the data controller). We will retain personal data we process on behalf of our Clients for as long as
              needed to provide services to our Client. We will retain and use this personal information as necessary to
              comply with our legal obligations, resolve disputes, and enforce our agreements. Your PayPal email, name
              and address data from PayPal account might be collected for invoice generation. No credit card data will
              be collected.
            </Text>
          </Box>
          <Heading level="2">Theme</Heading>

          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Dark theme:
            </Text>
            <Anchor>Enable dark theme</Anchor>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Font:
            </Text>
            <Anchor>change font</Anchor>
          </Box>
          <Heading level="2">Setting</Heading>

          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Delete account:
            </Text>
            <Anchor>permanently delete your account</Anchor>
          </Box>
          {/* end row for display an info */}
          {/* row for display an info */}
          <Box direction="row" margin="small" align="center" justify="start">
            <Text margin={{ right: "medium" }} weight="bold">
              Show log:
            </Text>
            <Anchor>show your stats</Anchor>
          </Box>
          {/* end row for display an info */}
        </Box>
      </Box>
    </Box>
  </>
);

export default SettingsPage;
