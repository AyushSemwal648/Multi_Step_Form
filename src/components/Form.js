import React, { useState, useEffect } from "react";
import Education from './education';
import Interest from "./interest";
import Intro from "./intro";
import Level from "./level";
import Loader from "./loader";
import Paths from "./paths";
import ProgressBar from "./ProgressBar";

function Form() {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <Education />;
    } else if (page === 1) {
      return <Interest />;
    } else if (page === 2) {
      return <Intro />;
    } else if (page === 3) {
      return <Level />;
    } else if (page === 4) {
      return <Loader />;
    } else {
      return <Paths />;
    }
  };

  // Use the useEffect hook to automatically switch to the next page after 5 seconds
  useEffect(() => {
    let timer;
    if (page === 4) {
      timer = setTimeout(() => {
        setPage(page + 1);
      }, 5000); // 5 seconds
    }

    return () => clearTimeout(timer);
  }, [page]);

  return (
    <div className="flex flex-col items-center mx-4 md:mx-0">
      <ProgressBar currentPage={page} totalPages={6} />
      <div className="form-container w-full md:w-3/4 lg:w-1/2">{PageDisplay()}</div>
      {page < 4 && (
        <button
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
          className="mt-8 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 items-center w-full md:w-auto"
        >
          Continue
        </button>
      )}
    </div>
  );
}

export default Form;