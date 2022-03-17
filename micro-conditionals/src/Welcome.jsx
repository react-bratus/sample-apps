import TruePage from "./TruePage";

const Welcome = () => {
  const bool = true;

  return (
    <div>
      WELCOME!
      {bool && <TruePage />}
    </div>
  );
};

export default Welcome;
