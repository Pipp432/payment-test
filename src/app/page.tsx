'use client'
import { CheckoutForm } from "@/component/CheckoutForm"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
export default function Home() {
  return (
    <PayPalScriptProvider options={{
      "clientId": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string, currency: 'USD',
    }}>
      <main className="flex min-h-screen flex-col items-center justify-between ">

        <div className="flex flex-col justify-center  absolute left-0 text-center items-center w-[50%] h-[100%] p-2 ">
        </div>
        <div className="  flex flex-col gap-10 absolute right-0 text-center items-center w-[50%] h-full rounded-lg p-2 bg-gray-200 shadow-white shadow-lg text-black">
          <CheckoutForm />

          <PayPalButtons style={{ color: 'gold', height: 50, layout: 'vertical', shape: 'rect', label: 'paypal' }} />
        </div>
      </main>
    </PayPalScriptProvider>
  );
}
