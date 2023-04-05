import React, { useRef, useState } from 'react'
import { useStateContext } from "../contexts/ContextProvider";
import Loader from "../../Landing page components/loader/Loader";

const VideoUpload = () => {
    const [videoTopic, setVideoTopic] = useState("");
    const [videoInstructor, setVideoInstructor] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [isUploading, setIsUploading] = useState("start");
    const formRef = useRef();

    const [topicError, setTopicError] = useState("");
    const [instructorError, setInstructorError] = useState("");
    const [linkError, setLinkError] = useState("");

    const validateInputs = (inputField) => {
        return inputField === ""
    }

    const checkForError = (error1, error2, error3) => {
        const errorStatus = error1.length === 0 || error2.length === 0 || error3.length === 0;
        console.table({
            error1, error2, error3
        })
        return errorStatus
    }

    const handleVideoSubmit = (e) => {
        e.preventDefault();
        validateInputs(videoTopic) &&
            setTopicError("Please enter a topic for this video");
        validateInputs(videoInstructor) &&
            setInstructorError("Please enter a name of the instructor");
        validateInputs(videoLink) &&
            setLinkError("Please select a video link to upload");

        if (checkForError(topicError, instructorError, linkError)) {
            console.table({
                isUploading, topicError, instructorError, linkError
            })
            setInstructorError("");
            setLinkError("");
            setVideoTopic("")
            return
        }
        try {

            setIsUploading('uploading');
            var requestOptions = {
                method: "POST",
                body: videoLink,
            };
            console.table({
                videoTopic, videoInstructor, videoLink,
            })
            fetch(
                `${process.env.DASHBOARD_ENDPOINT}postVideo/${videoInstructor}/${videoTopic}`,
                requestOptions
            )
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.log("error", error));
            setIsUploading("start");
            setTopicError("");
            setInstructorError("");
            setLinkError("");
            setVideoTopic("")
            setVideoInstructor("")
            setVideoLink("")
        }
        catch (error) {
            console.log(error);
        }
    };
    const { currentColor } = useStateContext();
    return (
        <div>
            <form
                className="flex items-center justify-center gap-5 flex-wrap mb-5"
                onSubmit={handleVideoSubmit}
                ref={formRef}
            >
                <div className="mb-3 w-66">
                    <label
                        htmlFor="videoTopic"
                        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                    >
                        Topic
                    </label>
                    <input
                        className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                        id="videoTopic"
                        type="text"
                        value={videoTopic}
                        onChange={(e) => setVideoTopic(e.target.value)}
                    />
                    {topicError && (
                        <label className="mb-2 inline-block text-red-500 text-sm ">
                            {topicError}
                        </label>
                    )}
                </div>
                <div className="mb-3 w-66">
                    <label
                        htmlFor="topic"
                        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                    >
                        Instructor
                    </label>
                    <input
                        className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                        id="topic"
                        type="text"
                        value={videoInstructor}
                        onChange={(e) => setVideoInstructor(e.target.value)}
                    />
                    {instructorError && (
                        <label className="mb-2 inline-block text-red-500 text-sm ">
                            {instructorError}
                        </label>
                    )}
                </div>
                <div className="mb-3 w-66">
                    <label
                        htmlFor="formFile"
                        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                    >
                        Video Link
                    </label>
                    <input
                        className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                        id="topic"
                        type="text"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                    />
                    {linkError && (
                        <label className="mb-2 inline-block text-red-500 text-sm ">
                            {linkError}
                        </label>
                    )}
                </div>
                <button
                    type="submit"
                    className="inline-block rounded px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    style={{ backgroundColor: currentColor }}
                >
                    Upload
                </button>
            </form>

            {isUploading === "uploading" && <Loader />}
            {isUploading === "uploaded" && <p className="mb-2 inline-block text-green-500 text-sm">Video link Uploaded successfully</p>}
        </div>
    );
}

export default VideoUpload


// https://threathuntersclub-my.sharepoint.com/:v:/g/personal/nikhilinganal_threathuntersclub_onmicrosoft_com/Eake0O1e2pFCoDuWin5ocjkBuT-Dx21xWvyXXR_ddq7FYQ?e=OBrFIK