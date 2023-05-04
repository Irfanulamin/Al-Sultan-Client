import React from "react";
import { Page, Text, Document } from "@react-pdf/renderer";

const Pdf = () => {
  return (
    <Document>
      <Page>
        <Text>
          Tell us the differences between uncontrolled and controlled components
          ?
        </Text>
        <Text>
          1. Controlled components store their state in the parent component, on
          the other hand Uncontrolled components store their state in the DOM
          itself.
        </Text>
        <Text>How to validate React props using PropTypes ?</Text>
        <Text>
          2 .You have to import the PropTypes library and define the expected
          propTypes.It will check props received by the component match the
          propTypes or not , It will give a warning if they do not.
        </Text>
        <Text>Tell us the difference between nodejs and express js ?</Text>
        <Text>
          3 .Node.js is a runtime environment for executing JavaScript code
          outside of a web browser, while Express.js is a popular web framework
          for Node.js .
        </Text>
        <Text>
          What is a custom hook, and why will you create a custom hook ?
        </Text>
        <Text>
          4 .A custom Hook is a JavaScript function whose name starts with ”use”
          and that may call other Hooks. I would create a custom hook to reduce
          code duplication and to simplify complexity.
        </Text>
      </Page>
    </Document>
  );
};

export default Pdf;
