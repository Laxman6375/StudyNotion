import { apiConnector } from "../apiconnector";
import { studentEndpoints } from "../apis";
import { toast } from "react-hot-toast";
import rzplogo from "../../assets/Logo/rzp_logo.png";
import { resetCart } from "../../slices/cartSlice";
import { setPaymentLoading } from "../../slices/courseSlice";

const {
  COURSE_PAYMENT_API,
  COURSE_VERIFY_API,
  SEND_PAYMENT_SUCCESS_EMAIL_API,
} = studentEndpoints;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export async function buyCourse(
  token,
  courses,
  userDetails,
  navigate,
  dispatch
) {
  // console.log("buyCourse -> courses", courses);
  const toastId = toast.loading(
    "Please wait while we redirect you to payment gateway",
    {
      position: "bottom-center",
      autoClose: false,
    }
  );
  try {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      toast.error("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const orderResponse = await apiConnector(
      "POST",
      COURSE_PAYMENT_API,
      { courses },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    if (!orderResponse.data.success) {
      toast.error(orderResponse.data.message);
      // console.log("buyCourse -> orderResponse", orderResponse);
      toast.dismiss(toastId);
      return;
    }
    // console.log("buyCourse -> orderResponse", orderResponse);
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      currency: orderResponse.data.message.currency,
      amount: orderResponse.data.message.amount.toString(),
      order_id: orderResponse.data.message.id,
      name: "Study Notion",
      description: "Thank you for purchasing the course",
      image: rzplogo,
      prefill: {
        name: userDetails?.firstName + " " + userDetails?.lastName,
        email: userDetails?.email,
      },
      handler: async function (response) {
        //console.log("buyCourse -> response", response);
        sendPaymentSuccessEmail(
          response,
          orderResponse.data.message.amount,
          token
        );
         verifyPayment({ ...response, courses }, token, navigate, dispatch);
      },
      theme: {
        color: "#686CFD",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", function (response) {
      toast.error("Payment Failed");
      // console.log(response.error);
    });
    toast.dismiss(toastId);
  } catch (error) {
    toast.dismiss(toastId);
    toast.error(error.response.data.message);
    // console.log("buyCourse -> error", error);
  }
}


async function sendPaymentSuccessEmail(response, amount, token) {

    //console.log('res',response);
  try {
    await apiConnector(
      "POST",
      SEND_PAYMENT_SUCCESS_EMAIL_API,
      {
        orderId: response.razorpay_order_id,
        paymentId: response.razorpay_payment_id,
        amount,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
  } catch (error) {
    // console.log("PAYMENT SUCCESS EMAIL ERROR....", error);
  }
}

async function verifyPayment(bodyData, token, navigate, dispatch) {
  // console.log('bodydata',bodyData);
  const toastId = toast.loading("Verifying Payment....");
  dispatch(setPaymentLoading(true));
  try {
    const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
      Authorization: `Bearer ${token}`,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("payment Successful, you are addded to the course");
    navigate("/dashboard/enrolled-courses");
    dispatch(resetCart());
  } catch (error) {
    // console.log("PAYMENT VERIFY ERROR....", error);
    toast.error("Could not verify Payment");
  }
  toast.dismiss(toastId);
  dispatch(setPaymentLoading(false));
}
