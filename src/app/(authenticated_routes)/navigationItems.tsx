"use client";

import { FC, useCallback } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const SidebarItems: FC = () => {
  const router = useRouter();

  const handleSnippetsClick = useCallback(
    () => router.push("/snippets"),
    [router]
  );

  const handleAccountClick = useCallback(
    () => router.push("/account"),
    [router]
  );

  const handleSettingsClick = useCallback(
    () => router.push("/settings"),
    [router]
  );

  const handleLogout = useCallback(
    () => router.push("/api/auth/logout"),
    [router]
  );

  return (
    <>
      <ListItemButton onClick={handleSnippetsClick}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Snippets" />
      </ListItemButton>
      <ListItemButton onClick={handleAccountClick}>
        <ListItemIcon>
          <AccountBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItemButton>
      <ListItemButton onClick={handleSettingsClick}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </>
  );
};
