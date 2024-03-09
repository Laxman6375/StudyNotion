import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { contactusEndpoint } from "../apis";

const { CONTACT_US_API } = contactusEndpoint;

export function contactUsMail(data) {
  return async () => {
    const toastId = toast.loading("Please Wait...");
    try {
      const options = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNo,
        countryCode: data.countrycode,
        message: data.message,
      };
        console.log("options : ", options);
        
      const response = await apiConnector("POST", CONTACT_US_API, options);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Contact Form Submitted Successfully");
    } catch (e) {
      toast.error("Unable to submit Contact Form");
      console.log("Unable to submit Contact Form", e);
    }
    toast.dismiss(toastId);
  };
}
