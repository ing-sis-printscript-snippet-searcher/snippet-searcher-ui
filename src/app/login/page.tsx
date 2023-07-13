"use client"
import {Box, Button, Typography} from "@mui/material";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  };

  const titleStyles = {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
  };

  const descriptionStyles = {
    fontSize: '18px',
    color: '#777',
    marginBottom: '40px',
  };


  return (
      <Box sx={containerStyles}>
        <Typography variant="h1" sx={titleStyles}>
          Bienvenido a Snippet Searcher
        </Typography>
        <Typography variant="body1" sx={descriptionStyles}>
          Una plataforma para guardar, compartir, evaluar y validar snippets de código.
        </Typography>
        <Link href="/api/auth/login">
          <Button variant="contained">
            Iniciar sesión
          </Button>
        </Link>
      </Box>
  );
}
export default LoginPage
