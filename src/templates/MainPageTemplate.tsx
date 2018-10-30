import React from "react";

interface IProps {
  sidebar: () => React.ReactElement<any>;
}

export default class MainPageTemplate extends React.Component<IProps, {}> {
  public render() {
    const { sidebar } = this.props;
    return (
      <div className="fd-ui fd-ui--fundamental">
        <div className="fd-ui__header">fd-ui_header</div>
        <div className="fd-ui__app">
          <div className="fd-app">
            {sidebar && <div className="fd-app__sidebar">{sidebar()}</div>}
            <main className="fd-app__main">fd-app_main</main>
          </div>
        </div>
      </div>
    );
  }
}
