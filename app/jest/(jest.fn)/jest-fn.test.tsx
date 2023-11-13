import { fireEvent, render } from "@testing-library/react";
import Jest from "./page";
import fn from "utils/exportResultFunction";

fn.plusFunction = jest.fn();
fn.minusFunction = jest.fn();

const plusFn = fn.plusFunction;
const minusFn = fn.minusFunction;

describe("<Page /> 테스트 코드", () => {
  it("plus 테스트", () => {
    const { getByRole } = render(<Jest />);

    const plusBtn = getByRole("button", { name: "exportPlus" });
    fireEvent.click(plusBtn);

    expect(plusFn).toBeCalledWith(10);
  });
  it("minus 테스트", () => {
    const { getByRole } = render(<Jest />);

    const minusBtn = getByRole("button", { name: "exportMinus" });
    fireEvent.click(minusBtn);

    expect(minusFn).toBeCalledWith(10);
  });
});
