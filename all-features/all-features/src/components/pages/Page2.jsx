import AnotherBody from "../AnotherBody";
import AnotherComponent from "../AnotherComponent";
import AnotherPage from "../AnotherPage";

const Page2 = () => {
  const isPage = true;
  const isActive = true;
  if (isPage) {
    return <AnotherPage />;
  }
  isActive && <AnotherComponent />;

  return <div>PAGE TWO</div>;
};

export default Page2;
