import React, { ReactElement } from "react";

type AlertType = "Warning" | "Error";

function type2Class(type: AlertType): string {
  switch (type) {
    case "Warning":
      return "fd-alert--warning";
    case "Error":
      return "fd-alert--error";
    default:
      return "";
  }
}

export default class Alert extends React.PureComponent<
  { message: string; type?: AlertType; onClose?: () => void },
  {}
> {
  public render() {
    const typeClass = this.props.type ? type2Class(this.props.type) : "";
    return (
      <div
        className={"fd-alert fd-alert--dismissible " + typeClass}
        role="alert"
        id="j2ALl423"
      >
        <button
          className="fd-alert__close"
          aria-controls="j2ALl423"
          aria-label="Close"
          onClick={this.props.onClose}
        />
        {this.props.message}
      </div>
    );
  }
}
