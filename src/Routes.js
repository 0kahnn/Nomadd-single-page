import React from "react";

import Index from "./Views/Index/Index";

import { Route, Routes, Navigate, Outlet, useLocation } from "react-router-dom";

function MyRoutes() {
  const routes = [
    {
      path: "/",
      component: Index,
    },
  ];

  return (
    <Routes>
      {/* public routes */}
      {routes.map((el, i) => {
        return (
          <Route key={i} exact path={el.path} element={<el.component />} />
        );
      })}

      {/* Redirect unmatch route */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default MyRoutes;
