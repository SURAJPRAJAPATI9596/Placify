import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CodingDashboard from "./../pages/CodingDashboard";
import Problems from "./../pages/Problems";
import Progress from "../pages/Progress";
function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CodingTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="min-w-full pt-12 bg-(--bg-primary) text-(--text-primary)">
      <Box className="border-b-4 border-zinc-900! bg-(--bg-primary) text-blue-700 fixed w-full">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Dashboard"
            className="text-amber-300!"
            {...a11yProps(0)}
          />
          <Tab label="Problems" {...a11yProps(1)} className="text-amber-300!" />
          <Tab label="Progress" {...a11yProps(2)} className="text-amber-300!" />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <CodingDashboard />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Problems />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Progress />
      </CustomTabPanel>
    </Box>
  );
}
