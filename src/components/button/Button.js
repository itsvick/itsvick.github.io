import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./Button.css";

export default function Button({text, className, href, newTab}) {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={className}>
      <a
        className={isDark ? `main-button main-button-dark` : `main-button`}
        href={href}
        target={newTab && "_blank"}
      >
        {text}
      </a>
    </div>
  );
}
