export interface ILocation {
  path: string;
}

export interface IRoute {
  location: ILocation;
  component: React.ComponentClass;
  exact?: boolean;
}

export interface IRouteCollection {
  [propName: string]: IRoute;
}
