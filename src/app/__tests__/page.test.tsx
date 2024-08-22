import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SearchBar from "../_components/ui/Filters";
import userEvent from "@testing-library/user-event";

describe("SearchBar", () => {
  render(<SearchBar />);
  const user = userEvent.setup();
  const category = screen.getByRole("button", {
    name: /category/i,
  });

  expect(category).toBeInTheDocument();

  it("confirms how many checkboxes was clicked", async () => {
    await user.click(category);

    const feelingsCheckbox = screen.getByRole("checkbox", {
      name: /feelings/i,
    });
    const natureCheckbox = screen.getByRole("checkbox", {
      name: /nature/i,
    });
    await user.click(feelingsCheckbox);
    await user.click(natureCheckbox);

    expect(feelingsCheckbox).toBeChecked();
    expect(natureCheckbox).toBeChecked();

    const counter = screen.getByTestId("count-selected");
    expect(counter.textContent).toBe("2 selected ");
  });
  it("confirms how many checkboxes was clicked", async () => {
    await user.click(category);

    const feelingsCheckbox = screen.getByRole("checkbox", {
      name: /feelings/i,
    });
    const natureCheckbox = screen.getByRole("checkbox", {
      name: /nature/i,
    });
    await user.click(feelingsCheckbox);
    await user.click(natureCheckbox);

    expect(feelingsCheckbox).toBeChecked();
    expect(natureCheckbox).toBeChecked();
    const clear = screen.getByRole("button", {
      name: /clear/i,
    });
    expect(clear).toBeInTheDocument();
  });

  it.skip("confirms how many checkboxes was clicked", async () => {
    //expect(counter.textContent).toBe("2 selected ");
  });
});
