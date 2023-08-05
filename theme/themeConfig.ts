import {
  PaletteColorOptions,
  createTheme,
  responsiveFontSizes,
  PaletteOptions,
  css,
} from "@mui/material/styles";
import { APP_COLORS } from "./colors";
import { APP_BAR_SIZE } from "@/utils/constants";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface CustomPalette {
    milkWhite?: PaletteColorOptions;
    google?: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface Theme extends CustomPalette {}
  interface ThemeOptions extends CustomPalette {}
}

// Override button props
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    milkWhite: true;
    google: true;
  }
}
export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;
export const DEFAULT_THEME: AllowedTheme = "dark";
const defaultTheme = createTheme({
  spacing: 10,
});
const { augmentColor } = defaultTheme.palette;
const createColor = (mainColor: any) =>
  augmentColor({
    color: {
      main: mainColor,
    },
  });
export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: { main: APP_COLORS.PRIMARY_COLOR },
      secondary: { main: APP_COLORS.SECONDARY_COLOR },
      mode: "light",
      milkWhite: createColor(APP_COLORS.WHITE),
      google: createColor(APP_COLORS.GOOGLE),
    },
    spacing: defaultTheme.spacing,
    typography: {
      fontFamily: [poppins.style.fontFamily].join(","),
      h4: {
        fontWeight: 600,
      },
      body1: {
        fontWeight: 500,
      },
      body2: {
        fontWeight: 500,
        color: defaultTheme.palette.text.secondary,
        fontSize: defaultTheme.spacing(1.2),
      },
      subtitle1: {
        fontWeight: 600,
      },
    },

    components: {
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            backgroundColor: defaultTheme.palette.common.white,
            color: defaultTheme.palette.text.primary,
            height: APP_BAR_SIZE,
            borderBottom: `${defaultTheme.spacing(0.1)} solid ${
              defaultTheme.palette.divider
            }`,
          },
        },
      },
      MuiToolbar: {
        defaultProps: {
          disableGutters: true,
        },
        styleOverrides: {
          root: {
            paddingLeft: defaultTheme.spacing(1),
            paddingRight: defaultTheme.spacing(1),
          },
        },
      },
      MuiBottomNavigation: {
        styleOverrides: {
          root: {
            borderTop: `${defaultTheme.spacing(0.1)} solid ${
              defaultTheme.palette.divider
            }`,
          },
        },
      },
      MuiBottomNavigationAction: {
        styleOverrides: {
          label: {
            fontSize: "12px !important",
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          size: "small",
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
          disableElevation: true,
          color: "secondary",
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
          endIcon: {
            marginLeft: 2,
            marginBottom: 1,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
            color: APP_COLORS.SECONDARY_COLOR,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 0,
            paddingBottom: 0,
            fontSize: 16,
          },
          iconWrapper: {
            marginLeft: "0px !important",
          },
        },
      },
    },
  })
);
export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: { main: APP_COLORS.PRIMARY_COLOR },
      secondary: { main: APP_COLORS.SECONDARY_COLOR },
      mode: "dark",
      milkWhite: createColor(APP_COLORS.WHITE),
      google: createColor(APP_COLORS.GOOGLE),
    },
    typography: {
      fontFamily: [poppins.style.fontFamily].join(","),
      caption: {
        color: defaultTheme.palette.grey[400],
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: "contained",
          disableElevation: true,
          color: "primary",
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
          endIcon: {
            marginLeft: 2,
            marginBottom: 1,
          },
        },
      },
    },
  })
);

export const globalStyles = css`
  :root {
    body {
      background-color: #fff;
      color: #121212;
    }
    main {
      padding-top: ${APP_BAR_SIZE}px;
    }
  }

  [data-theme="dark"] {
    body {
      background-color: #121212;
      color: #fff;
    }
  }
`;
