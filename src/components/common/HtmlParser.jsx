import parse, { domToReact } from "html-react-parser"

const options = {
  replace: ({ name, children }) => {
    if (name === "h1") {
      return (
        <h1 style={{ fontSize: "26px" }}>{domToReact(children, options)}</h1>
      )
    }
    if (name === "h2") {
      return (
        <h1 style={{ fontSize: "20px" }}>{domToReact(children, options)}</h1>
      )
    }
    if (name === "h3") {
      return (
        <h1 style={{ fontSize: "15px" }}>{domToReact(children, options)}</h1>
      )
    }
    if (name === "p") {
      return (
        <h1 style={{ fontSize: "13px" }}>{domToReact(children, options)}</h1>
      )
    }
  },
}

export default function HtmlParser({ children }) {
  return parse(children, options)
}
