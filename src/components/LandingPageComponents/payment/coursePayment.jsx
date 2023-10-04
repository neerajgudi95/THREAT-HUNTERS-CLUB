import React, { useEffect, useState } from "react";
import "./coursePayment.css";
import axios from "axios";
import { TiTick } from "react-icons/ti";
import useUser from "../../../utils/custom-hooks/useUser";
import { useToken } from "../../../utils/custom-hooks/useToken";

const CoursePayment = () => {
  const { user } = useUser();
  const [token, setToken] = useToken();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [paymentUrl, setPaymentUrl] = useState("");

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  // console.log(token);

  const handlePayment = () => {
    let config = {
      method: "post",
      url: "https://threathuntersclub.tech/api/enroll",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
    };
    // console.log(config);
    axios
      .request(config)
      .then((response) => {
        // console.log(response.data);
        const popupOptions =
          "width=800,height=800,left=400,top=100,scrollbars=yes,resizable=yes";
        // const newWindow = window.open(url);
        window.open(response.data.url, "_blank");
        // setIsModalOpen(true);
        // setPaymentUrl(response.data.url);
        // makePayment(response.data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(user);
  // useEffect(() => {
  //   // checkExistingUser();
  // }, []);

  return (
    <div className="thc__landingPage">
      <div className="thc__paymentPage-wrapper section__padding">
        <div className="thc__paymentPage-container">
          <div className="thc__paymentPage-left">
            <div className="thc_paymentPage-left__title">
              <div className="thc_courseThumbnail">
                <video
                  src="https://ik.imagekit.io/fq9vykvp2/course_thumbnail.mp4?updatedAt=1683559781117"
                  // controls="controls"
                  autoPlay={true}
                />
              </div>
              <h3>Cyber Security</h3>
            </div>
            <div className="thc__payment-features">
              <ul>
                <h3>Features</h3>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>One-year membership of the club.</span>
                </li>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>Live Training Sessions and their recordings</span>
                </li>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>3+ Mock interviews.</span>
                </li>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>Online tech resources: docs, blogs, talks.</span>
                </li>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>Networking Opportunities</span>
                </li>
              </ul>
            </div>
            <div className="thc_payment-userDetails">
              <div className="thc_payment-userDetails_form-control">
                <label htmlFor="fullname">Name</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  readOnly
                  value={`${user?.info?.firstName} ${user?.info?.lastName}`}
                />
              </div>
              <div className="thc_payment-userDetails_form-control">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  readOnly
                  value={user?.email}
                />
              </div>
            </div>
          </div>
          <div className="thc__paymentPage-right">
            <h3>Payment Details</h3>
            <div className="details">
              <p>Course Fee</p>
              <p>₹ 5999</p>
            </div>
            <div className="details">
              <p>Discount (15%)</p>
              <p>- ₹ 900</p>
            </div>
            <div className="details" style={{ marginTop: "30px" }}>
              <p>Total</p>
              <p>₹ 5099</p>
            </div>
            <div className="payment_btn">
              <button onClick={handlePayment}>Proceed to payment</button>
            </div>
            {/* {isModalOpen && (
              <PaymentModal url={paymentUrl} onClose={closeModal} />
            )} */}
            <div className="payment_qry">
              <p>Drop a mail to below ID incase of any Queries?</p>
              <p>thc_admin@threathuntersclub.tech</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePayment;
