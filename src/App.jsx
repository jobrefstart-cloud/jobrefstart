import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppStates from "./utils/Common/AppStates";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./components/Layout/UI/UIAfterLogin/PublicUI/Home";
import ExploreReviews from "./components/Layout/UI/UIAfterLogin/PublicUI/ExploreReviews";
import GetRef from "./components/Layout/UI/UIAfterLogin/PublicUI/GetRef";
import AddReference from "./components/Layout/UI/UIAfterLogin/PublicUI/AddReference";
import Participate from "./components/Layout/UI/UIAfterLogin/PublicUI/Participate";
import Panel from "./components/Layout/UI/UIAfterLogin/AdminUI/Panel";
import GroupUserList from "./components/Layout/UI/UIAfterLogin/PublicUI/GroupUserList";
import Messages from "./components/Layout/UI/UIAfterLogin/PublicUI/Messages";
import Notifications from "./components/Layout/UI/UIAfterLogin/PublicUI/Notifications";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue from your referencef
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FFC107", // Warm yellow
      contrastText: "#000000",
    },
    background: {
      default: "#f5f7fa", // light gray background
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none", // Buttons normal case
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 20px",
          boxShadow: "none",
        },
        containedPrimary: {
          backgroundColor: "#1976d2",
          "&:hover": {
            backgroundColor: "#115293",
          },
        },
        containedSecondary: {
          backgroundColor: "#FFC107",
          color: "#000",
          "&:hover": {
            backgroundColor: "#e0a800",
          },
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // index: true,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/get-references",
        element: <GetRef />,
      },
      {
        path: "/company-reviews",
        element: <ExploreReviews />,
      },
      {
        path: "/ar",
        element: <AddReference />,
      },
      {
        path: "/admin-panel",
        element: <Panel />,
      },
      {
        path: "/participate",
        element: <Participate />,
      },
      {
        path: "industry-users",
        element: <GroupUserList />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/participate",
        element: <Participate />,
      },
    ]
  },

  {
    path: "*",
    element: <div>404 – Page Not Found</div>,
  },
]);

const App = () => {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <AppStates>
          <ThemeProvider theme={theme}>
            <CssBaseline />
      <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
      </AppStates>
    </QueryClientProvider>
  )
}

export default App;