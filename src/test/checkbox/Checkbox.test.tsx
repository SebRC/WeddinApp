import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Checkbox } from "../../components/checkbox/Checkbox";

test("changes state when checkbox is clicked", () => {
  const testId = "testId";
  const value = false;
  render(<Checkbox value={value} testId={testId} id="id" label="Test" onChange={(e) => {}} />);
  expect(screen.getByTestId(testId)).not.toBeChecked();

  userEvent.click(screen.getByTestId(testId));

  expect(screen.getByTestId(testId)).toBeChecked();

  userEvent.click(screen.getByTestId(testId));

  expect(screen.getByTestId(testId)).not.toBeChecked();
});
