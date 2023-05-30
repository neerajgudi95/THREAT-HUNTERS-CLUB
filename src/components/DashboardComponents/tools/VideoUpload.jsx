import React, { useRef, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { useSnackbar } from "notistack";
import Loader from "../../LandingPageComponents/loader/Loader";

const VideoUpload = () => {
  const [videoTopic, setVideoTopic] = useState("");
  const [videoInstructor, setVideoInstructor] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleVideoSubmit = (e) => {
    e.preventDefault();
    try {
      if (videoTopic === "" || videoInstructor === "" || videoLink === "") {
        throw new Error("Enter all the fields to upload the video link");
      }
      setIsUploading(true);
      var requestOptions = {
        method: "POST",
        body: videoLink,
      };
      fetch(
        `${process.env.DASHBOARD_ENDPOINT}postVideo/${videoInstructor}/${videoTopic}`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          enqueueSnackbar(result, {
            variant: "success",
          });
          setVideoTopic("");
          setVideoInstructor("");
          setVideoLink("");
        })
        .catch((error) =>
          enqueueSnackbar(error.message, {
            variant: "error",
          })
        );
      setIsUploading(false);
    } catch (error) {
      setIsUploading(false);
      enqueueSnackbar(error.message, {
        variant: "warning",
      });
    }
  };

  const { currentColor } = useStateContext();

  return (
    <div>
      <form
        className="flex items-center justify-center gap-5 flex-wrap mb-5"
        onSubmit={handleVideoSubmit}
      >
        <div className="mb-3 w-66">
          <label
            htmlFor="videoTopic"
            className="mb-2 inline-block text-neutral-700"
          >
            Topic
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:file:bg-neutral-700 dark:file:text-neutral-100"
            id="videoTopic"
            type="text"
            value={videoTopic}
            onChange={(e) => setVideoTopic(e.target.value)}
          />
        </div>
        <div className="mb-3 w-66">
          <label htmlFor="topic" className="mb-2 inline-block text-neutral-700">
            Instructor
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:file:bg-neutral-700 dark:file:text-neutral-100"
            id="topic"
            type="text"
            value={videoInstructor}
            onChange={(e) => setVideoInstructor(e.target.value)}
          />
        </div>
        <div className="mb-3 w-66">
          <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-700"
          >
            Video Link
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:file:bg-neutral-700 dark:file:text-neutral-100"
            id="topic"
            type="text"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="inline-block items-end rounded px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-init
          data-te-ripple-color="light"
          style={{ backgroundColor: currentColor }}
        >
          Upload
        </button>
      </form>

      {isUploading === "uploading" && <Loader />}
    </div>
  );
};

export default VideoUpload;
