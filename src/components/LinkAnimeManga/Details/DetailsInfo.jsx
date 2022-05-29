function DetailsInfo(props) {
  return (
    <div>
      {props.data.map((el, i) => (
        <p key={i}>
          {el.title} {el.info ? el.info : "Неизвестно"}
        </p>
      ))}
    </div>
  );
}
export default DetailsInfo;
