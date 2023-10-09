import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=800&h=500&q=60", // Adjusted image size
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=800&h=500&q=60", // Adjusted image size
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&h=500", // Adjusted image size
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=800&h=500&q=60", // Adjusted image size
  },
];

const titles = ["Title 1", "Title 2", "Title 3", "Title 4"];

const descriptions = [
  "Description 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Description 2: Ut eget libero nec velit vulputate fringilla. Nullam volutpat, dui vel condimentum tincidunt.",
  "Description 3: Fusce sit amet elit at elit venenatis interdum. Morbi id enim a lorem vestibulum.",
  "Description 4: Sed eu massa nec metus fermentum hendrerit. Etiam euismod libero a eros bibendum, nec fringilla dolor convallis.",
];

function STMS() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === images.length - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? images.length - 1 : prevActiveStep - 1
    );
  };

  const handleStepChange = (event, newStep) => {
    setActiveStep(newStep - 1);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Paper
        elevation={3}
        style={{
          marginTop: "20px",
          height: "70vh",
          width: "80%",
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",
        }}
      >
        <div style={{ width: "60%", padding: "20px" }}>
          <img
            src={images[activeStep].imgPath}
            style={{ width: "100%", objectFit: "cover", borderRadius: "20px" }}
          />
          <div style={{ width: "60%", padding: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                gap: "20px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  // Handle Visit Page button click
                  window.location.href = "/your-page-url"; // Replace with your actual URL
                }}
              >
                Visit Page
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  // Handle Share button click
                  // Implement your share functionality here
                  alert("Share functionality goes here");
                }}
              >
                Share
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "40%",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "65px",
          }}
        >
          <Typography variant="h5" style={{}}>
            {titles[activeStep]}
          </Typography>
          <Typography variant="body1" style={{}}>
            {descriptions[activeStep]}
          </Typography>
        </div>
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <Pagination
          count={images.length}
          page={activeStep + 1}
          onChange={handleStepChange}
          size="small"
          color="grey"
        />
      </Box>
    </div>
  );
}

export default STMS;
