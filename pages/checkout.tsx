import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import { PayPalScriptOptions } from '@paypal/paypal-js/types/script-options';
import { PayPalButtonsComponentOptions } from '@paypal/paypal-js/types/components/buttons';

const paypalScriptOptions: PayPalScriptOptions = {
  'client-id':
    'AVoOeut-MlNH-iuUsHV7zRa6OvTY5_cGqUlyejMmQLGO6UNuAlTCOA9gonD2zt7tSu2EK73l9xs13AFq',
  // currency: 'USD',
};
function Button() {
  /**
   * usePayPalScriptReducer use within PayPalScriptProvider
   * isPending: not finished loading(default state)
   * isResolved: successfully loaded
   * isRejected: failed to load
   */
  const [{ isPending }] = usePayPalScriptReducer();
  const paypalbuttonTransactionProps: PayPalButtonsComponentOptions = {
    style: { layout: 'vertical' },
    createOrder(data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: '0.01',
            },
          },
        ],
      });
    },
    async onApprove(data, actions) {
      /**
       * data: {
       *   orderID: string;
       *   payerID: string;
       *   paymentID: string | null;
       *   billingToken: string | null;
       *   facilitatorAccesstoken: string;
       * }
       */

      return actions.order?.capture().then((details) => {
        alert(
          'Transaction completed by' +
            (details?.payer?.name?.given_name ?? 'No details')
        );

        alert('Data details: ' + JSON.stringify(data, null, 2));
      });
    },
  };
  return (
    <>
      {isPending ? <h2>Load Smart Payment Button...</h2> : null}
      <PayPalButtons {...paypalbuttonTransactionProps} />
    </>
  );
}
export default function Checkout() {
  return (
    <div className='mt-20 flex items-center flex-col w-full '>
      <h2>Your total is: 0.01$</h2>
      <PayPalScriptProvider options={paypalScriptOptions}>
        <Button />
      </PayPalScriptProvider>
    </div>
  );
}
