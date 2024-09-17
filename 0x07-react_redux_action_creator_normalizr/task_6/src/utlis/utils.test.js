import { getFullYear, getFooterCopy } from "./utils";
import { getLatestNotification } from "./utils";

// Test for getFullYear
test("getFullYear returns the correct year", () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toEqual(currentYear);
});

// Test for getFooterCopy
test("getFooterCopy returns the correct string for true", () => {
  const result = getFooterCopy(true);
  expect(result).toEqual("Holberton School");
});

test("getFooterCopy returns the correct string for false", () => {
  const result = getFooterCopy(false);
  expect(result).toEqual("Holberton School main dashboard");
});

// Test for getLatestNotification
test("getLatestNotification returns the correct string", () => {
  const expectedString =
    "<strong>Urgent requirement</strong> - complete by EOD";
  const result = getLatestNotification();
  expect(result).toEqual(expectedString);
});
