import React, { useEffect } from "react";

export default function Form({ handleShorten }: { handleShorten: any }) {
  const [urlLink, setUrlLink] = React.useState<string>();
  const [message, setMessage] = React.useState<string>("");

  const formIsEmpty = () => {
    if (!urlLink) {
      console.log("its empty");
      setMessage("The form is empty");
      return;
    }
    else {
        setMessage("")
      }
  };


  const handleSubmit = (e: any) => {
    e.preventDefault();

    // let data = JSON.stringify({
    //   long_url: urlLink,
    // });

    handleShorten(urlLink);
  };

  return (
    <div className="w-full h-auto mt-9 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="url"
          >
            Enter link to shorten
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="url"
            onChange={(e) => setUrlLink(e.target.value)}
            value={urlLink}
            type="text"
            placeholder="Link"
          />
        </div>
        <div className="flex justify-center align-center text-red-500 rounded-lg p-1 m-1">
          <p className="">{message}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              formIsEmpty();
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            shorten
          </button>
        </div>
      </form>
    </div>
  );
}
