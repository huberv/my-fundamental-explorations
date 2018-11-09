import React from "react";

import Alert from "../atoms/Alert";
import AlertOverlay from "../atoms/AlertOverlay";

import { WithAlerts } from "../services/AlertService";

interface IProps {
  globalNav?: React.ReactElement<any>;
  sidebar?: () => React.ReactElement<any>;
}

export default class MainPageTemplate extends React.Component<IProps, {}> {
  public render() {
    const { sidebar, globalNav } = this.props;
    return (
      <WithAlerts
        render={({ alerts, clearAlert }) => {
          return (
            <div className="fd-ui fd-ui--fundamental">
              <div className="fd-ui__header">{globalNav}</div>
              <div className="fd-ui__app">
                <div className="fd-app">
                  {sidebar && (
                    <div className="fd-app__sidebar">{sidebar()}</div>
                  )}
                  <main className="fd-app__main">{this.props.children}</main>
                </div>
              </div>
              {alerts.length > 0 && (
                <AlertOverlay>
                  {alerts.map((alert, index) => (
                    <div key={index}>
                      <Alert
                        key={index}
                        message={alert.message}
                        type={alert.type}
                        onClose={() => clearAlert(index)}
                      />
                    </div>
                  ))}
                </AlertOverlay>
              )}
            </div>
          );
        }}
      />
    );
  }
}
