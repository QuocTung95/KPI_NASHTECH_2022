import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux'

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import Login from "./views/Login/Login";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import Layout from "./views/Layout/Layout";
import Guard from "./components/Guard/Guard";
import { setupStore } from "./redux/store";
// import 'antd/dist/antd.min.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const allRouters = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Guard><Profile /></Guard>,
  },
  {
    path: "/login",
    element: <Login />,
  }
];

root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
    <ThemeContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
        
        <Routes>
            {
              allRouters.map((item: any, index) => {
                const CommonLayout = item.layout || Layout;

                return (
                  <Route key={index} path={item.path} element={<CommonLayout>{item.element}</CommonLayout>} />
                )
              })
            }
            <Route key="*" path='*' element={<div>handle 404 not found</div>} />
          </Routes>

        </BrowserRouter>
      </AuthContextProvider>
    </ThemeContextProvider>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
