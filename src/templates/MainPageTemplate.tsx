import React from "react";

import GlobalNav from "../atoms/GlobalNav";

interface IProps {
  globalNav?: React.ReactElement<any>;
  sidebar?: () => React.ReactElement<any>;
}

export default class MainPageTemplate extends React.Component<IProps, {}> {
  public render() {
    const { sidebar, globalNav } = this.props;
    return (
      <div className="fd-ui fd-ui--fundamental">
        <div className="fd-ui__header">{globalNav}</div>
        <div className="fd-ui__app">
          <div className="fd-app">
            {sidebar && <div className="fd-app__sidebar">{sidebar()}</div>}
            <main className="fd-app__main">{this.props.children}</main>
          </div>
        </div>
      </div>
    );
  }
}
