import { StyledEngineProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { appStore, persistedStore } from "./appStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Routing from "pages/Routing";
import "shared/base.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Routing />,
//   },
// ]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StyledEngineProvider injectFirst>
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistedStore}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StyledEngineProvider>
);
