import React from 'react';
import { Navigate } from 'react-router-dom';
import FormPage from '../pages/FromPage/FormPage';

export const publicRoutes = [
  { path: "*", component: <Navigate replace to="/form" />, exact: true },
  { path: "/form", component: <FormPage />, exact: true },
]
