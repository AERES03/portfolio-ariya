/** @format */

import React from "react";
import List from "../Elements/List";
import TagA from "../Elements/TagA";
import Button from "../Elements/Button";
import ScrollTo from "../ScrollTo";
function NavbarMenu({ className = "", closeMenu }) {
  return (
    <ul className={`flex ${className}`}>
      <List>
        <button type="button" onClick={() => ScrollTo("home")}>
          HOME
        </button>
      </List>
      <List>
        <button type="button" onClick={() => ScrollTo("services")}>
          SERVICES
        </button>
      </List>
      <List>
        <button type="button" onClick={() => ScrollTo("resume")}>
          RESUME
        </button>
      </List>
      <List>
        <button type="button" onClick={() => ScrollTo("contact")}>
          CONTACT
        </button>
      </List>
    </ul>
  );
}

export default NavbarMenu;
