import React from "react";

import SideNav from "../organisms/SideNav";
import MainPageTemplate from "../templates/MainPageTemplate";

export default class MainPage extends React.Component<{}, {}> {
  public render() {
    return (
      <MainPageTemplate
        sidebar={() => (
          <SideNav items={["Home", "Global navigation", "Pages"]} />
        )}
      />
    );
  }
}
