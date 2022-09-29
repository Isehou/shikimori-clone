import "./style.scss";

const PreProcessor = () => {
  console.log("ready");
  return (
    <div className="preprocessor">
      <div className="wrapper">
        <div className="block">
          <h2 className="block__title">Title</h2>
          <p className="block__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            quae!
          </p>
        </div>
        <a href="" className="link-2">
          google
        </a>
      </div>
    </div>
  );
};
export default PreProcessor;
