/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

import FormPet from "layouts/registers/components/FormPet";
import FormVoluntary from "layouts/registers/components/FormVoluntary";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Registers() {

  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const [isVoluntary, setIsVoluntary] = useState(false);
  const [isPet, setIsPet] = useState(true);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);
    
    if (newValue < 1) {
      setIsVoluntary(false);
      setIsPet(true); 
    } else {
      setIsVoluntary(true);
      setIsPet(false); 
    }
  };
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5">Cadastro</MDTypography>
              </MDBox>

              <Grid item xs={12} md={6} lg={5} sx={{ ml: "27%" }} alignItems="center">
                <AppBar position="static">
                  <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                    <Tab
                      label="Animal"
                      icon={ <Icon fontSize="small" sx={{ mt: -0.25 }}> pets </Icon> }
                    />
                    <Tab
                      label="Voluntário"
                      icon={ <Icon fontSize="small" sx={{ mt: -0.25 }}> person </Icon> }
                    />
                  </Tabs>
                </AppBar>
              </Grid>
              
              <Grid sx={{display: isPet ? "block" : "none" }}>
                <FormPet >  </FormPet>
              </Grid>
              <Grid sx={{display: isVoluntary ? "block" : "none" }}>
                <FormVoluntary >  </FormVoluntary>
              </Grid>
              
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Registers;
