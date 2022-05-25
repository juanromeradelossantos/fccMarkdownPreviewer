import * as marked from "https://cdn.skypack.dev/marked@4.0.15";
import Parser from "https://cdn.skypack.dev/html-react-parser@1.4.12";

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "# title1\n## title 2\n[link](https://www.example.com)\n\nThis is `inline code`\n\n```\nThis is a code block\n```\n- list item\n\n>blockquote\n\n![fcc logo](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/FreeCodeCamp_logo.svg/320px-FreeCodeCamp_logo.svg.png)\n\n**bold text**" };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("div", { className: "top-bar rounded-top" }, "Editor")), /*#__PURE__*/

      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("div", { className: "top-bar rounded-top" }, "Previewer"))), /*#__PURE__*/


      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement(Editor, { className: "", input: this.state.input, onChange: this.handleInput })), /*#__PURE__*/

      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement(Preview, { className: "", input: this.state.input })))));




  }}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(MarkdownPreviewer, null));

function Editor(props) {
  return /*#__PURE__*/(
    React.createElement("div", { id: "Editor", class: "shadow rounded-bottom" }, /*#__PURE__*/
    React.createElement("textarea", { id: "editor", class: "h-100 w-100", onChange: props.onChange, value: props.input })));


}

function Preview(props) {
  return /*#__PURE__*/(
    React.createElement("div", { id: "preview", className: "shadow text-break rounded-bottom overflow-auto" },
    Parser(marked.parse(props.input))));


}