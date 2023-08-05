"use client";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import {
  StyledLogo,
  StyledAppNavigation,
  StyledTabsList,
  StyledTab,
} from "./appHeaderStyles";
import AppMegaMenuComponent from "./appMegaMenu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "next-themes";
import { THEME_MODE } from "@/utils/constants";
import { MegaMenuType } from "@/utils/types";

interface AppHeaderComponentProps {
  menus: MegaMenuType;
}

const AppHeaderComponent = ({ menus }: AppHeaderComponentProps) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [tabIndex, setTabIndex] = React.useState<string | boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const handleTheme = () => {
    resolvedTheme === THEME_MODE.LIGHT
      ? setTheme(THEME_MODE.DARK)
      : setTheme(THEME_MODE.LIGHT);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <StyledLogo />
          <StyledAppNavigation>
            <StyledTabsList
              value={tabIndex}
              onChange={(_, value) => setTabIndex(value)}
            >
              <StyledTab value="0" label="Home" />
              <StyledTab
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                aria-controls={open ? "products-menu" : undefined}
                ref={anchorRef}
                value="1"
                label="Products"
                onClick={handleToggle}
              />
              <StyledTab value="2" label="Accessories" />
              <StyledTab value="3" label="StyleClub" />
            </StyledTabsList>
          </StyledAppNavigation>
          <Box>
            <Button onClick={handleTheme}>Dark Mode</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <AppMegaMenuComponent
        handleClose={handleClose}
        open={open}
        menus={menus}
        anchorEl={anchorRef.current}
        onKeyDown={handleListKeyDown}
      />
    </>
  );
};

export default AppHeaderComponent;
