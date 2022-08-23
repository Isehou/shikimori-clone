let page = {
  name: "yoo!",
  content: "",
  render() {
    console.log(this.content);
    // alert(this.name);
  },
  getname(value) {
    this.name.getname = value;
  },
};
page.content = `<div>Content About this</div>`;
page.render();
export default function TestCode() {
  return (
    <div className="testCode">
      <h1></h1>
      <h2>Start !</h2>
    </div>
  );
}
