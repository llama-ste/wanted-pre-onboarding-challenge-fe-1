import "react-toastify/dist/ReactToastify.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./index.css";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./components/Layout/Layout";
import CustomRouter from "./components/Common/CustomRouter";
import customHistory from "./utils/history";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
};

const toastConfig: object = {
  autoClose: 500,
  bodyStyle: { fontSize: "14px" },
  closeButton: true,
  closeOnClick: true,
  limit: 1,
  pauseOnHover: false,
  position: "top-center",
  progressStyle: {
    background: `linear-gradient(
      to right,
      #4cd964,
      #5ac8fa,
      #007aff,
      #34aadc,
      #5856d6,
      #ff2d55
    )`,
  },
  style: {
    maxWidth: "1000px",
    width: "max-content",
    zIndex: 1000000,
  },
  theme: "light",
};

const queryClient = new QueryClient(queryOptions);

root.render(
  <React.StrictMode>
    <CustomRouter history={customHistory}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <ToastContainer {...toastConfig} />
        <CssBaseline />
        <GlobalStyle />
        <Layout>
          <App />
        </Layout>
      </QueryClientProvider>
    </CustomRouter>
  </React.StrictMode>
);
