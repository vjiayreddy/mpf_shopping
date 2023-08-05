"use client";

import React from "react";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MenuList from "@mui/material/MenuList";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { styled } from "@mui/material/styles";
import { Container, ListItemIcon, Typography } from "@mui/material";
import { MegaMenuType } from "@/utils/types";
import Avatar from "@mui/material/Avatar";
import NextLink from "next/link";
import { APP_ROUTES } from "@/utils/enums";

interface AppMegaMenuComponentuProps {
  anchorEl?: any;
  open: boolean;
  handleClose: (event: Event | React.SyntheticEvent) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
  menus: any;
}

const StyledMenuPaper = styled(Paper)(() => ({
  width: "100%",
  padding: 20,
}));

const StyledMenuListHeader = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1.4),
}));

const StyledMenuPopper = styled(Popper)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: Number(theme.zIndex.appBar),
}));

const AppMegaMenuComponent: React.FC<AppMegaMenuComponentuProps> = ({
  anchorEl,
  open,
  handleClose,
  onKeyDown,
  menus,
}) => {
  return (
    <StyledMenuPopper
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      transition
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Container maxWidth="md">
            <StyledMenuPaper>
              <ClickAwayListener onClickAway={handleClose}>
                {menus?.errors ? (
                  <div>{JSON.stringify(menus?.errors)}</div>
                ) : (
                  <Grid container alignItems="flex-start" spacing={3}>
                    <Grid item md={4} lg={4} xl={4}>
                      <StyledMenuListHeader>Regular Wares</StyledMenuListHeader>
                      <MenuList
                        dense
                        autoFocusItem={open}
                        id="products-menu"
                        aria-labelledby="products-menu"
                        onKeyDown={onKeyDown}
                      >
                        {menus?.occasions?.map((menu:any) => (
                          <NextLink
                            passHref
                            href={`${APP_ROUTES.PRODUCTS}/${menu.name}`}
                            key={menu._id}
                          >
                            <MenuItem>{menu.label}</MenuItem>
                          </NextLink>
                        ))}
                      </MenuList>
                    </Grid>
                    <Grid item md={4} lg={4} xl={4}>
                      <StyledMenuListHeader>Occasions</StyledMenuListHeader>
                      <MenuList
                        dense
                        autoFocusItem={open}
                        id="products-menu"
                        aria-labelledby="products-menu"
                        onKeyDown={onKeyDown}
                      >
                        {menus?.regular[0]?.categories.map((menu: any) => (
                          <NextLink
                            passHref
                            href={`${APP_ROUTES.PRODUCTS}/${menu.name}`}
                            key={menu._id}
                          >
                            <MenuItem>
                              <ListItemIcon>
                                <Avatar
                                  sx={{ width: 24, height: 24 }}
                                  alt={menu.label}
                                  src={menu.image}
                                />
                              </ListItemIcon>
                              <Typography variant="inherit">
                                {menu.label}
                              </Typography>
                            </MenuItem>
                          </NextLink>
                        ))}
                      </MenuList>
                    </Grid>
                    <Grid item container md={4} lg={4} xl={4}>
                      <StyledMenuListHeader>Accessories</StyledMenuListHeader>
                      <MenuList
                        dense
                        autoFocusItem={open}
                        id="products-menu"
                        aria-labelledby="products-menu"
                        onKeyDown={onKeyDown}
                      >
                        {menus?.accessories[0].categories.map((menu:any) => (
                          <MenuItem key={menu._id}>
                            <ListItemIcon>
                              <Avatar
                                sx={{ width: 24, height: 24 }}
                                alt={menu.label}
                                src={menu.image}
                              />
                            </ListItemIcon>
                            <Typography variant="inherit">
                              {menu.label}
                            </Typography>
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Grid>
                  </Grid>
                )}
              </ClickAwayListener>
            </StyledMenuPaper>
          </Container>
        </Grow>
      )}
    </StyledMenuPopper>
  );
};
export default AppMegaMenuComponent;
