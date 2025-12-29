/** @format */

import React from "react";

function TagA({ href, children, className = "" }) {
  return <a href={href}>{children}</a>;
}

export default TagA;
