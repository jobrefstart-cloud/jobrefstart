import  { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import ReferencesCreator from "./ReferencesCreator"
import ReferencesSeeker from "./ReferencesSeeker"
import CompanyReviews from "./CompanyReviews"
import AllUsers from "./AllUsers"
import PostDetails from "./PostDetails";
import ProfileDetails from "./ProfileDetails";
import UserActivities from "./UserActivities";

// helper component for 
function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      style={{ flex: 1, padding: "16px" }}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

const Panel = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
      <Box sx={{  mt: 10 }}>
        {/* Tabs (left side) */}
       

        <Tabs
          orientation="horizontal"
          value={value}
          onChange={handleChange}
          centered
          sx={{
            backgroundColor: "#bfbcccff",
            
            "& .MuiTab-root": { color: "#585858ff" },
            "& .Mui-selected": { color: "#ffffffff" },
            "& .MuiTabs-indicator": { backgroundColor: "#fff" },
          }}
        >
          <Tab label="References Creator" />
          <Tab label="References Seeker" />
          <Tab label="Company Reviews" />
          <Tab label="All Users" />
          <Tab label="Post Details" />
          <Tab label="Profile Details" />
          <Tab label="User Activities" />
        </Tabs>
        
        
        {/*  (right side) */}
        <Box sx={{ flex: 1, backgroundColor: "#f5f5f5" }}>
          <TabPanel value={value} index={0}>
            <ReferencesCreator/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ReferencesSeeker/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CompanyReviews/>
            
          </TabPanel>
          <TabPanel value={value} index={3}>
            <AllUsers/>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <PostDetails/>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <ProfileDetails/>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <UserActivities/>
          </TabPanel>
        </Box>
      </Box>
    
  );
};

export default Panel;
