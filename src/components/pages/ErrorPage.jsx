import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16">
      <div className="flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-6 font-bold text-3xl">
            <span>Error</span>
            {status || 404}
          </h2>
          <p className="text-xl font-semibold">{error?.message}</p>
          <Link to="/" className="btn btn-sm rounded-sm mt-11 btn-outline">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
