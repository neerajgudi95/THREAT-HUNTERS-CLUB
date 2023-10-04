import axios from "axios";
import { useEffect, useState } from "react";

export const usePaymentStatusCheck = () => {
    const [userToken, setUserToken] = useState(() =>
        localStorage.getItem("token")
    );
    const [paymentStatus, setPaymentStatus] = useState(false);

    useEffect(() => {
        setUserToken(localStorage.getItem("token"));
    }, []);

    const checkPaymentStatus = async (authorization) => {
        let config = {
            method: "get",
            url: "https://threathuntersclub.tech/api/check-payment-status",
            headers: {
                authorization: authorization,
                "Content-Type": "application/json",
            },
        };
        // console.log(config);
        axios
            .request(config)
            .then((response) => {
                setPaymentStatus(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        checkPaymentStatus(userToken);
        // const intervalId = setInterval(() => { checkPaymentStatus(userToken) }, 5000)
        // setTimeout(() => {
        //     clearInterval(intervalId)
        // }, 300000)

        // return () => {
        //     clearInterval(intervalId);
        // };
    }, [userToken]);

    return { paymentStatus }
}