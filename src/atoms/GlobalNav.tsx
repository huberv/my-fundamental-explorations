import React from "react";

const memo = (React as any).memo;

const LeftGroup = memo((props: any) => (
  <div className="fd-global-nav__group fd-global-nav__group--left">
    {props.children}
  </div>
));

const ProductName = memo((props: any) => (
  <div className="fd-global-nav__product-name">{props.children}</div>
));

const MegaMenu = memo(({ menuName }: { menuName: string }) => (
  <div className="fd-global-nav__group fd-global-nav__launchpad">
    <button
      className="fd-button--secondary fd-button--l"
      aria-haspopup="true"
      aria-controls="launchpad"
    >
      {menuName}
    </button>
    <nav className="fd-mega-menu" aria-hidden="true" id="launchpad" />
  </div>
));

export default class GlobalNav extends React.PureComponent<{}> {
  public static LeftGroup = LeftGroup;
  public static ProductName = ProductName;
  public static MegaMenu = MegaMenu;

  public render() {
    return <nav className="fd-global-nav">{this.props.children}</nav>;
  }
}
