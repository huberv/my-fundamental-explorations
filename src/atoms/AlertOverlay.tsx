import React from "react";

export default class AlertOverlay extends React.PureComponent<{}> {
  public render() {
    if (!this.props.children) {
      return null;
    }
    return (
      <div
        className="fd-ui__overlay fd-overlay fd-overlay--alert"
        aria-hidden="false"
      >
        {this.props.children}
      </div>
    );
  }
}
