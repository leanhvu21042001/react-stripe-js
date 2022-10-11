import { useEffect, useRef, useState } from "react";

import { useElements } from "@stripe/react-stripe-js";

const CardNumberMount = () => {
  const ref = useRef(null);
  const elements = useElements();
  const [value, setValue] = useState();

  useEffect(() => {
    if (elements) {
      const cardNumber = elements.create("cardNumber");
      cardNumber.mount("#card-number-mount");
    }
  }, [elements]);

  const handleOnCardNumberChange = (event) => {
    console.log({
      event
    });
  };

  return (
    <div id="card-number-mount" ref={ref} onChange={handleOnCardNumberChange} />
  );
};

export default CardNumberMount;
