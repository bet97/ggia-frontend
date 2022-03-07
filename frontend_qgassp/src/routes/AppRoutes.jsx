import React from "react";
/* import { Routes, Route , useRoutes} from "react-router-dom"; */
import { useRoutes } from "react-router-dom";
import { StartPage } from "../components/StartPage";
import { U1plannerDefault } from "../components/U1plannerDefault";
import { Settlement } from "../components/Settlement";
import { U1planner } from "../components/U1planner";
import { NewResidents } from "../components/NewResidents";
import { U2planner } from "../components/U2planner";
import { StackedBarchart } from "../components/StackedBarchart";
import { Welcome } from "../components/Welcome";
import { LandUseChangeTableForm } from "../components/LandUseChangeTableForm";
import { LUCBarChart } from "../components/LUCBarChart";

export const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Welcome /> },
    { path: "startPage", element: <StartPage /> },
    { path: "settlement", element: <Settlement /> },
    { path: "u1planner", element: <U1planner /> },
    { path: "u1plannerDefault", element: <U1plannerDefault /> },
    { path: "stackedBarChart", element: <StackedBarchart /> },
    { path: "newResidents", element: <NewResidents /> },
    { path: "u2planner", element: <U2planner /> },
    { path: "landusechangebarchart", element: <LUCBarChart /> },
    { path: "landusechangeform", element: <LandUseChangeTableForm /> },
  ]);
  return routes;
};
