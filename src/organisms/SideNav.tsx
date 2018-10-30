import React from "react";

interface ISideNavProps {
  items: string[];
}

export default class SideNav extends React.PureComponent<ISideNavProps, {}> {
  public render() {
    const { items, ...otherProps } = this.props;
    return (
      <nav className="fd-side-nav">
        <ul className="fd-side-nav__list">
          {items.map((item, index) => (
            <li className="fd-side-nav__item" {...otherProps}>
              <a className="fd-side-nav__link" href="#">
                {typeof item === "string" && <span>{item}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
