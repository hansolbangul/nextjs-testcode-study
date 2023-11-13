import { fireEvent, render } from "@testing-library/react";
import Jest from "./page";
import { minusFunction, plusFunction } from "utils/resultFunction";

jest.mock("utils/resultFunction");

describe("<Page /> 테스트 코드", () => {
  it("plus 테스트", () => {
    const { getByRole } = render(<Jest />);

    const plusBtn = getByRole("button", { name: "plus" });
    fireEvent.click(plusBtn);

    expect(plusFunction).toBeCalledWith(10);
  });
  it("minus 테스트", () => {
    const { getByRole } = render(<Jest />);

    const minusBtn = getByRole("button", { name: "minus" });
    fireEvent.click(minusBtn);

    expect(minusFunction).toBeCalledWith(10);
  });
});
