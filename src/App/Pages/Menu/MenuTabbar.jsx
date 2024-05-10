import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-re-super-tabs";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import MenuTab from "../../Components/Tabbarmenu.jsx";
import { baseUrl } from "../../Components/constants.jsx";
import { Col, Row } from "react-bootstrap";

const MenuTabbar = () => {
  const [menuData, setMenuData] = useState(null);
  const [activeTab, setActiveTab] = useState("Starter");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Authentication token not found");
        }

        const response = await axios.get(`${baseUrl}/api/restaurant/getMenu`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.data.message === "Menu fetched successfully") {
          const menuItems = response.data.menu.items;
          const categorizedMenu = {};

          menuItems.forEach((item) => {
            const category = item?.category
              ? item?.category?.name
              : "All Items";
            if (!categorizedMenu[category]) {
              categorizedMenu[category] = [];
            }
            categorizedMenu[category].push(item);
          });

          setMenuData(categorizedMenu);
          console.log("Menu Data:", categorizedMenu);

          setError(null);
        } else {
          throw new Error("Failed to fetch menu data");
        }
      } catch (error) {
        console.error(error);
        toast.error(`Error fetching menu data: ${error.message}`);
        setError(error.message);
      }
    };

    fetchMenuData();
  }, []);

  const handleTabClick = (category) => {
    setActiveTab(category); // Set the active tab to the clicked category
    console.log("Active Tab:", category); // Log the name of the clicked category
  };

  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/api/restaurant/deleteItem/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.message === "Item deleted successfully") {
        // Refresh menu data after successful deletion
        fetchMenuData();
        console.log("Item deleted successfully");
      } else {
        throw new Error("Failed to delete item");
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  console.log(handleDelete);
  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition="Bounce"
        />
        <Tabs activeTab={activeTab}>
          <TabList className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <TabList>
              {menuData &&
                Object.keys(menuData).map((category) => (
                  <button
                    key={category}
                    style={{
                      padding: "10px 20px",
                      cursor: "pointer",
                      backgroundColor:
                        activeTab === category ? "#00BF63" : "#fff",
                      color: activeTab === category ? "#fff" : "#00BF63",
                      borderRadius: "10px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "500",
                      margin: "0 10px",
                      border: "1px solid #00BF63",
                      boxShadow: "0px 2px 6.8px 0px rgba(0, 0, 0, 0.1)",
                    }}
                    onClick={() => handleTabClick(category)}
                  >
                    {category.toUpperCase()}
                  </button>
                ))}
            </TabList>
            <TabList>
              <Link to="/Add">
                <button
                  className="border-0 shadow "
                  style={{
                    padding: "10px 20px",
                    display: "inline-block",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    color: "#00BF63",
                    borderRadius: "10px",
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: "500",
                    margin: "0 25px",
                    boxShadow: "0px 2px 6.8px 0px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Add
                </button>
              </Link>
            </TabList>
          </TabList>
          <TabList>
            {menuData && (
              <Row key={activeTab} className="mt-3">
                {menuData[activeTab]?.map((item) => (
                  <Col md={3} key={item._id}>
                    <div className="bg-white shadow rounded-4   mt-4">
                      <div className="w-100">
                        <img
                          src={item.image}
                          alt=""
                          className="w-100 shadow"
                          style={{
                            objectFit: "contain",
                            backgroundPosition: "center",
                            borderRadius: "15px 15px 15px 15px ",
                            height: "250px",
                          }}
                        />
                      </div>
                      <div className="ms-2 py-2">
                        <p
                          style={{
                            color: "#424242",
                            fontSize: "18px",
                            fontWeight: "400",
                          }}
                        >
                          <b> {item.name}</b>
                        </p>
                        <div className="d-flex  justify-content-between align-items-center">
                          <p
                            style={{
                              color: "#00BF63",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            $ {item.price}
                          </p>
                          <span className="me-2 text-danger">
                            <button onClick={() => handleDelete(item._id)}>
                              {" "}
                              Delete
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </TabList>
        </Tabs>
      </div>
    </>
  );
};

export default MenuTabbar;
