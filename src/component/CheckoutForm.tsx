import StripeTestCards from "./StripeTestCard"
import Stripe from "stripe";
import { createCheckoutSession } from "@/action/stripe";
import * as config from "@/config"
import { useState } from "react";
import { formatAmountForDisplay } from "@/utils/stripe-helper";
import ChoosePrice from "./ChoosePrice";
interface CheckoutFormProps {
  uiMode: Stripe.Checkout.SessionCreateParams.UiMode;
}

export const CheckoutForm = () => {

  const [loading] = useState<boolean>(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const [input, setInput] = useState<{ customDonation: number }>({
    customDonation: 10,
  });
  const formAction = async (data: FormData): Promise<void> => {
    const uiMode = data.get(
      "uiMode",
    ) as Stripe.Checkout.SessionCreateParams.UiMode;
    const { client_secret, url } = await createCheckoutSession(data);

    if (uiMode === "embedded") return setClientSecret(client_secret);
    window.location.assign(url as string);
  };
  return <form action={formAction} className="card-container">
    <div className="item-name">Item Name</div>
    <input type="hidden" name="uiMode" value={"hosted"} />
    <StripeTestCards />
    <ChoosePrice name='customDonation' setPrice={setInput} />
    <button
      className="donate_btn"
      type="submit"
      disabled={loading}
    >
      Pay {formatAmountForDisplay(input.customDonation, config.CURRENCY)}
    </button>
  </form>
}
