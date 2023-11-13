import { fireEvent, render } from "@testing-library/react";
import Jest from "./page";

describe("<Page /> 테스트 코드", () => {
  it("window.alert 테스트", () => {
    window.alert = jest.fn();

    const { getByRole } = render(<Jest />);

    const button = getByRole("button", { name: "alert" });
    fireEvent.click(button);

    expect(window.alert).toBeCalledWith("alert");
  });
});
