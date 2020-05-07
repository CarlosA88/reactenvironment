import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "../Dashboard";

describe("load Dashboard component", () => {
  it("renders with out crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dashboard />, div);
  });
});
