import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-re-super-tabs';
import MenuTab from '../../Components/Tabbar.jsx';
import Delivered from './OrderTabbarPages/Delivered.jsx';
import New from './OrderTabbarPages/New.jsx';
import Process from './OrderTabbarPages/Process.jsx';

const OrderTabbar = () => {
  const [activeTab, setActiveTab] = useState('New');

  const handleTabChange = tabId => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <Tabs activeTab={activeTab} onTabChange={handleTabChange}>
        <TabList>
          <Tab component={MenuTab} label='New' id='New' />
          <Tab component={MenuTab} label='In Process' id='Process' />
          <Tab component={MenuTab} label='Delivered' id='Delivered' />
        </TabList>
        <TabPanel component={New} id='New' />
        <TabPanel component={Process} id='Process' />
        <TabPanel component={Delivered} id='Delivered' />
      </Tabs>
      {activeTab === 'New' && <div>Content for New - 1</div>}
      {activeTab === 'Process' && <div>Content for Process - 3</div>}
      {activeTab === 'Delivered' && <div>Content for Delivered - 2</div>}
    </div>
  );
};

export default OrderTabbar;
