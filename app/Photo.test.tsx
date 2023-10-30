import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";
import Home from "./page";
import photoQuery from "@/apis/query/photos.query";

const mockData = [
  {
    id: "0",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url: "https://picsum.photos/id/0/5000/3333",
  },
  {
    id: "1",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/LNRyGwIJr5c",
    download_url: "https://picsum.photos/id/1/5000/3333",
  },
  {
    id: "2",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/N7XodRrbzS0",
    download_url: "https://picsum.photos/id/2/5000/3333",
  },
  {
    id: "3",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/Dl6jeyfihLk",
    download_url: "https://picsum.photos/id/3/5000/3333",
  },
  {
    id: "4",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/y83Je1OC6Wc",
    download_url: "https://picsum.photos/id/4/5000/3333",
  },
  {
    id: "5",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3334,
    url: "https://unsplash.com/photos/LF8gK8-HGSg",
    download_url: "https://picsum.photos/id/5/5000/3334",
  },
  {
    id: "6",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/tAKXap853rY",
    download_url: "https://picsum.photos/id/6/5000/3333",
  },
  {
    id: "7",
    author: "Alejandro Escamilla",
    width: 4728,
    height: 3168,
    url: "https://unsplash.com/photos/BbQLHCpVUqA",
    download_url: "https://picsum.photos/id/7/4728/3168",
  },
  {
    id: "8",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/xII7efH1G6o",
    download_url: "https://picsum.photos/id/8/5000/3333",
  },
  {
    id: "9",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3269,
    url: "https://unsplash.com/photos/ABDTiLqDhJA",
    download_url: "https://picsum.photos/id/9/5000/3269",
  },
];

const renderProviderComponent = ({
  children,
  client,
}: {
  children: JSX.Element;
  client?: QueryClient;
}): React.ReactElement => <QueryClientProvider client={client ?? new QueryClient()}>{children}</QueryClientProvider>;

describe("<Home /> 테스트", () => {
  it("타이틀 테스트", () => {
    const { getByRole } = render(renderProviderComponent({ children: <Home /> }));

    const title = getByRole("heading", {
      level: 2,
    });

    expect(title).toHaveTextContent("랜덤 사진");
  });
  it("로딩 상태 확인", () => {
    photoQuery.getRandomPhotosQuery = jest.fn().mockReturnValue({
      isLoading: true,
    });

    const client = new QueryClient();

    const { getByText } = render(renderProviderComponent({ children: <Home />, client }));

    expect(getByText("loading")).toBeInTheDocument();
  });
  it("10개가 맞는지.", () => {
    photoQuery.getRandomPhotosQuery = jest.fn().mockReturnValue({
      data: mockData,
    });

    const client = new QueryClient();

    const { getAllByTestId } = render(renderProviderComponent({ children: <Home />, client }));

    expect(getAllByTestId("photo")).toHaveLength(mockData.length);
  });
});
