"use client";
import React from "react";
import UserData from "@/components/userData";
import FetchButton from "@/components/fetchButton";
import { Box, Typography } from "@mui/material";
import { useUser } from "@auth0/nextjs-auth0/client";

const Home = () => {
  const containerStyles = {
    width: "100vw",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  };

  const itemStyles = {
    marginBottom: "10px",
  };
  return (
    <Box sx={containerStyles}>
      <Typography color="black" variant="h3" sx={itemStyles}>
        Welcome to snippets searcher!
      </Typography>
    </Box>
  );
};

export default Home;
