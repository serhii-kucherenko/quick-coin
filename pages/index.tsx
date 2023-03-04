import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { DefaultLayout } from '../src/layouts/DefaultLayout';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <DefaultLayout>
      <h2>Welcome to the QuickCoin</h2>

      <div>
        <p>How does QuickCoin works?</p>
        <ol>
          <li>Sign up: Customers sign up on the QuickCoin website and generate an API key.</li>
          <li>Integration: Customers integrate the QuickCoin SDK into their e-commerce website using their API key.</li>
          <li>
            Checkout: Customers add items to their shopping cart and click "Buy with QuickCoin". The customer is redirected to a QuickCoin checkout
            page.
          </li>
          <li>Payment: Customers select their desired cryptocurrency wallet and complete the payment process.</li>
          <li>Commission: QuickCoin charges a commission fee for each transaction.</li>
          <li>
            Payment to merchant: QuickCoin converts the cryptocurrency payment into the merchant's preferred currency and transfers the funds to the
            merchant's wallet.
          </li>
          <li>Dashboard: Merchants can view transaction details and manage their account through a user-friendly dashboard.</li>
        </ol>
        <p>That's it! QuickCoin simplifies the process of accepting cryptocurrency payments for e-commerce businesses.</p>
      </div>
      <button onClick={() => router.push('/profile')}>Try It Out</button>
    </DefaultLayout>
  );
};

export default Home;
