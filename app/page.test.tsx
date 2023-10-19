import { render } from "@testing-library/react";
import Home from "@app/page";

describe("메인 페이지 테스트", () => {
  it("타이틀 테스트하기", () => {
    const { getByRole } = render(<Home />);

    const title = getByRole("heading", { level: 2 });
    expect(title).toHaveTextContent('"제목이다요"');
    expect(title).toBeInTheDocument();
  });

  it("서브 타이틀 테스트하기", () => {
    const { getByText } = render(<Home />);

    const subTitle = getByText("방울이다요");
    expect(subTitle).toBeInTheDocument();
  });
});
