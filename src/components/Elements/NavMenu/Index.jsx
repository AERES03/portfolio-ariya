/** @format */

import React from "react";
import ListLink from "./ListLink";
import ScrollTo from "../../ScrollTo";
const Index = ({ className = "", closeMenu }) => {
  return (
    <ul className={`flex ${className}`}>
      <ListLink>
        <button type="button" onClick={() => ScrollTo("home")}>
          HOME
        </button>
      </ListLink>
      <ListLink>
        <button type="button" onClick={() => ScrollTo("services")}>
          SERVICES
        </button>
      </ListLink>
      <ListLink>
        <button type="button" onClick={() => ScrollTo("resume")}>
          RESUME
        </button>
      </ListLink>
      <ListLink>
        <button type="button" onClick={() => ScrollTo("contact")}>
          CONTACT
        </button>
      </ListLink>
    </ul>
  );
};

export default Index;
