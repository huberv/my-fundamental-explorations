import React from "react";

import GlobalNav from "../atoms/GlobalNav";
import SideNav from "../organisms/SideNav";
import MainPageTemplate from "../templates/MainPageTemplate";

export default class MainPage extends React.Component<{}, {}> {
  public render() {
    return (
      <MainPageTemplate
        globalNav={
          <GlobalNav>
            <GlobalNav.LeftGroup>
              <GlobalNav.ProductName>App Builder</GlobalNav.ProductName>
            </GlobalNav.LeftGroup>
            <GlobalNav.MegaMenu menuName="Apps" />
          </GlobalNav>
        }
        sidebar={() => (
          <SideNav items={["Home", "Global navigation", "Pages"]} />
        )}
      />
    );
  }
}
