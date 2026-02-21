import { Component } from "react";
import "../index.css";

export default class Container extends Component {
  render() {
    const { children, className } = this.props;
    return (
      <div className={className ? `container ${className}` : `container`}>
        {children}
      </div>
    );
  }
}
