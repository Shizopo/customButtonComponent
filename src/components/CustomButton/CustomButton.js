// @flow

import React from "react";
import "./CustomButton.sass";

type Props = {
  buttonValue?: string,
  buttonSize?: string,
  buttonRole?: string,
  buttonState?: string,
  nonStyled?: boolean,
  isCustom?: boolean,
  customStyle?: {},
  iconUrl?: string
};

type State = {};

class CustomButton extends React.PureComponent<Props, State> {
  addSizeModifier = () => {
    let { buttonSize } = this.props;
    buttonSize = buttonSize ? buttonSize.toLowerCase() : "m";

    switch (buttonSize) {
      case "s":
        return "button--small";
      case "m":
        return "button--medium";
      case "l":
        return "button--large";
      default:
        return "button--medium";
    }
  };

  addRoleModifier = () => {
    let { buttonRole } = this.props;
    let rawClassName = this.addSizeModifier();
    buttonRole = buttonRole ? buttonRole.toLowerCase() : "primary";

    switch (buttonRole) {
      case "primary":
        return rawClassName.concat("--primary");
      case "secondary":
        return rawClassName.concat("--secondary");
      case "success":
        return rawClassName.concat("--success");
      case "warning":
        return rawClassName.concat("--warning");
      case "error":
        return rawClassName.concat("--error");
      default:
        return rawClassName.concat("--primary");
    }
  };

  addStateModifier = () => {
    let { buttonState, nonStyled } = this.props;
    let rawClassName = !nonStyled
      ? this.addRoleModifier()
      : "button--non-styled";
    buttonState = buttonState ? buttonState.toLowerCase() : null;

    switch (buttonState) {
      case "hover":
        return rawClassName.concat(" is-hover");
      case "active":
        return rawClassName.concat(" is-active");
      case "disabled":
        return rawClassName.concat(" is-disabled");
      case "loading":
        return rawClassName.concat(" is-loading");
      default:
        return rawClassName;
    }
  };

  generateClassName = () => this.addStateModifier();

  generateButton = () => {
    const {
      buttonValue = "Button",
      isCustom,
      customStyle,
      iconUrl
    } = this.props;

    if (isCustom) {
      return (
        <div className="button--custom" style={customStyle}>
          <span className="button__icon">
            {iconUrl ? (
              <img
                src={iconUrl}
                alt="Button icon"
                className="button__icon__img"
              ></img>
            ) : null}
          </span>
          <p className="button__text">{buttonValue}</p>
        </div>
      );
    }

    return (
      <div className={this.generateClassName()}>
        <span className="button__icon"></span>
        <p className="button__text">{buttonValue}</p>
      </div>
    );
  };

  render() {
    return this.generateButton();
  }
}

export default CustomButton;
