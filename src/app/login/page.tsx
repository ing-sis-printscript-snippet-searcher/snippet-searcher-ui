"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  };

  const titleStyles = {
    fontSize: "36px",
    color: "#333",
    marginBottom: "20px",
  };

  const descriptionStyles = {
    fontSize: "18px",
    color: "#777",
    marginBottom: "40px",
  };

  return (
    <Box sx={containerStyles}>
      <Typography variant="h1" sx={titleStyles}>
        Snippet Searcher
      </Typography>
      <Link href="/api/auth/login">
        <Button variant="contained">Log In</Button>
      </Link>
    </Box>
  );
};
export default LoginPage;
