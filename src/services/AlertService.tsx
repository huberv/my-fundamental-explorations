import { produce } from "immer";
import React, { ReactElement } from "react";

export interface IAlert {
  message: string;
  type?: "Warning" | "Error";
}

interface IState {
  alerts: IAlert[];
}

export interface IAlertService {
  alerts: IAlert[];
  clearAlert: (index: number) => void;
}

interface IProps {
  render: (alertService: IAlertService) => ReactElement<{}>;
}

export class WithAlerts extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      alerts: [
        { message: "Hello, world!!" },
        { message: "React rocks", type: "Warning" },
      ],
    };
  }

  public render() {
    return this.props.render({
      alerts: this.state.alerts,
      clearAlert: this.clearAlert,
    });
  }

  private clearAlert: (index: number) => void = (index) => {
    this.setState(
      produce<IState>((draft) => {
        draft.alerts.splice(index, 1);
      }),
    );
  }
}
