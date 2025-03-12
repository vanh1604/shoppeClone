import { useState, useMemo, useCallback, Fragment } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import { routes } from "./routes/routes";
import DefaultComponent from "./components/DefaultComponent";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";


function App() {
  return (
    <>
      <div>
        <PersistGate persistor={persistor}>
          <Routes>
            {routes.map(({ Page, path, isShowSearchBar }) => {
              const Layout = isShowSearchBar ? DefaultComponent : Fragment;
              return (
                <Route
                  key={path}
                  path={path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </PersistGate>
      </div>
    </>
  );
}

export default App;
