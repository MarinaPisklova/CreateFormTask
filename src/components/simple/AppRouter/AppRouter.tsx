import React from "react";
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from "../../../router/route";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(source =>
        <Route
          key={source.path}
          path={source.path}
          element={source.component} />
      )}
    </Routes>
  )
}

export default AppRouter;
