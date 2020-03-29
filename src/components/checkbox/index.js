import React from "react";
import classNames from "classnames";
import checkboxStyles from "./styles.module.scss";

export default function Checkbox(props) {
  const { children, id, value, name, disabled } = props;
  const childrenArray = React.Children.map(children, component =>
    React.isValidElement(component) ? component : null
  );
  console.log(childrenArray.length);

  return (
    <label
      className={classNames(
        checkboxStyles.container,
        disabled ? checkboxStyles.disabled : ""
      )}
    >
      <input
        id={id}
        type="checkbox"
        value={value}
        name={name}
        disabled={disabled}
      />
      {children}
      <span className={checkboxStyles.checkmark} />
    </label>
  );
}
