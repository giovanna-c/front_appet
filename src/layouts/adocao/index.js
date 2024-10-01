// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// components
import Header from "layouts/adocao/components/Header";
import Animais from "./components/Animais";

function Adocao() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Header>
        <MDBox mt={5} mb={3}>
          <Animais />
        </MDBox>
        </Header>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Adocao;
