import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../Components/Sidebar.jsx";
import Navbar from "../../Components/Navbar.jsx";
import TabBar from "./MenuTabbar.jsx";
import axios from "axios";


const index = () => {
 

  return (
    <>
      <Container fluid className="  h-100">
        <Row>
          <Col
            xs={2}
            md={2}
            className="text-center p-0 shadow "
            style={{ backgroundColor: "#FFFFFF", height: "100vh" }}
          >
            <SideBar activetabe="Menu" />
          </Col>
          <Col
            md={10}
            xs={10}
            className="custom-scrollbar"
            style={{ height: "100vh", overflowY: "auto" }}
          >
            <Row>
              <Navbar />
            </Row>
            <Row className="mt-4">
              <div>
                <TabBar />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
