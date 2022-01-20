import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });

export default function PayPal(props) {
  const [show, setShow] = useState(true);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  useEffect(() => {
    if (success) {
      props.parentCallback(orderID);
      alert("Payment successful!!");
      // return <Redirect push to="/book-result" />;
    }
  }, [orderID, props, success]);

  // creates a paypal order
  const createOrder = (data, actions) => {
    console.log(props);
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: Math.floor(props.order.totalAmount / 22717.1),
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    console.log("approve");
    // completePayment()
    return actions.order.capture().then(function () {
      console.log("something");
      // console.log(details.stringify());
      // const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AePqX3x49W0bLBZVxxnL39ylHITs8RLdNBTPSfAVRPX2Vib-3tuROGUNL2LwFXgoKn9-QCd8Yp8QrLN9",
      }}
    >
      <PayPalButtons
        // style={{ layout: "vertical" }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
}
