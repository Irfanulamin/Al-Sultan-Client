import React from "react";

const Blog = () => {
  return (
    <div className="p-4 md:p-24 lg:p-24">
      <h2 className="text-amber-600 text-2xl font-bold my-2  primary_text underline">
        Tell us the differences between uncontrolled and controlled components ?
      </h2>
      <p className=" text-slate-950 text-lg font-bold mb-4 primary_text  tracking-wide">
        Controlled components store their state in the parent component, on the
        other hand Uncontrolled components store their state in the DOM itself.
      </p>
      <h2 className="text-amber-600 text-2xl font-bold my-2  primary_text underline">
        How to validate React props using PropTypes ?
      </h2>
      <p className=" text-slate-950 text-lg font-bold mb-4 primary_text  tracking-wide">
        You have to import the PropTypes library and define the expected
        propTypes.It will check props received by the component match the
        propTypes or not , It will give a warning if they do not.
      </p>
      <h2 className="text-amber-600 text-2xl font-bold my-2  primary_text underline">
        Tell us the difference between nodejs and express js ?
      </h2>
      <p className=" text-slate-950 text-lg font-bold mb-4 primary_text  tracking-wide">
        Node.js is a runtime environment for executing JavaScript code outside
        of a web browser, while Express.js is a popular web framework for
        Node.js .
      </p>
      <h2 className="text-amber-600 text-2xl font-bold my-2  primary_text underline">
        What is a custom hook, and why will you create a custom hook ?
      </h2>
      <p className=" text-slate-950 text-lg font-bold mb-4 primary_text  tracking-wide">
        A custom Hook is a JavaScript function whose name starts with ”use” and
        that may call other Hooks. I would create a custom hook to reduce code
        duplication and to simplify complexity.
      </p>
    </div>
  );
};

export default Blog;
