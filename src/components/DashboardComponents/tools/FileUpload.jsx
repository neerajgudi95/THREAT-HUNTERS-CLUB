import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Loader from "../../Landing page components/loader/Loader";

const FileUpload = () => {
  const [fileName, setFileName] = useState("");
  const [fileTopic, setFileTopic] = useState("");
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [isUploading, setIsUploading] = useState("start");

  const [fileNameError, setInstructorError] = useState("");
  const [topicError, setTopicError] = useState("");
  const [selectedFileError, setLinkError] = useState("");

  const validateInputs = (inputField) => {
    return inputField.length === 0
  }

  const checkForError = (error1, error2, error3) => {
    const errorStatus = error1.length === 0 && error2.length === 0 && error3.length === 0
    return errorStatus
  }

  const handleFileSubmit = (e) => {
    e.preventDefault();

    validateInputs(fileName) &&
      setTopicError("Please enter a name for this file");
    validateInputs(fileTopic) &&
      setInstructorError("Please enter a topic for this file");
    !selectedFile &&
      setLinkError("Please select a file to upload");

    if (checkForError(fileNameError, topicError, selectedFileError)) {
      return
    }

    let formData = new FormData();
    formData.append("file", selectedFile);

    try {
      {
        setIsUploading("uploading");
        var requestOptions = {
          method: "POST",
          body: formData,
          redirect: "follow",
        };

        fetch(
          `${process.env.DASHBOARD_ENDPOINT}addNotes/${fileTopic}/${fileName}`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
        setIsUploading("uploaded");
        setIsUploading("start");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const { currentColor } = useStateContext();
  return (
    <div>
      <form
        className="flex items-center justify-center gap-5 flex-wrap"
        onSubmit={handleFileSubmit}
      >
        <div className="mb-3 w-66">
          <label
            htmlFor="fileName"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
            File Name
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
            id="fileName"
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
          {fileNameError && (
            <label className="mb-2 inline-block text-red-500 text-sm">
              {fileNameError}
            </label>
          )}

        </div>
        <div className="mb-3 w-66">
          <label
            htmlFor="topic"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
            Topic related to file
          </label>

          <input
            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
            id="topic"
            type="text"
            value={fileTopic}
            onChange={(e) => setFileTopic(e.target.value)}
          />
          {topicError && (
            <label className="mb-2 inline-block text-red-500 text-sm">
              {topicError}
            </label>
          )}
        </div>
        <div className="mb-3 w-66">
          <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
            Select File
          </label>

          <input
            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
            id="formFile"
            type="file"
            // value={selectedFile}
            onChange={(e) => {
              setSelectedFile(e.target.files[0]);
            }}
          />
          {selectedFileError && (
            <label className="mb-2 inline-block text-red-500 text-sm">
              {selectedFileError}
            </label>
          )}
        </div>
        <div className="mb-3 w-96">
          <button
            type="submit"
            className="inline-block rounded px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light"
            style={{ backgroundColor: currentColor }}
          >
            Upload
          </button>
        </div>
      </form>

      {isUploading === "uploading" && <Loader />}
      {isUploading === "uploaded" && <p className="mb-2 inline-block text-green-500 text-sm">File Uploaded successfully</p>}
    </div>
  );
};

export default FileUpload;
