import Location from "react-app-location";

import MainPage from "../pages/MainPage";
import { IRouteCollection } from "./RouteTypes";

export const routes: IRouteCollection = {
  index: {
    location: new Location("/"),
    component: MainPage,
    exact: true
  }
};
