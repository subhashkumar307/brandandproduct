import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Home from "@/components/Home";
import Profile from "@/components/Profile";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      {/* ===============================================================header-content */}
      <section className="section">
        <div className="container">
          <Tabs>
            <TabList className="header-content fs-14 fw-400 d-flex justify-content-center">
              <Tab>Home</Tab>
              <Tab>Profile</Tab>
              <Tab>Contact</Tab>
            </TabList>
            <div className="content">
              <TabPanel>
                <Home />
              </TabPanel>
              <TabPanel>
                <Profile />
              </TabPanel>
              <TabPanel>
                <Contact />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Index;
