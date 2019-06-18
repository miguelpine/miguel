import React from "react";
import { ReactComponent as LogoImage } from "../../libraries/images/logo/miguel-logo.svg";

export function Logo() {
  return (
    <div className="logo-containter">
      <LogoImage className="logo" />
    </div>
  );
}
