import type {NextPage} from "next";
import {useRouter} from "next/router";
import {DefaultLayout} from "../src/layouts/DefaultLayout";

const Home: NextPage = () => {
    const router = useRouter();

    return (
        <DefaultLayout>
            <h2>Welcome to the QuickCoin</h2>

            <button onClick={() => router.push('/profile')}>Try It Out</button>

            <div class="markdown prose w-full break-words dark:prose-invert dark">
                <p>QuickCoin is a service that enables
                e-commerce sites to easily accept cryptocurrency payments. Here is how it works:</p>

                <ol>
                    <li><p>A merchant registers an account on QuickCoin's website using their MetaMask wallet. This
                        generates a unique API key for their account.</p></li>
                    <li><p>The merchant integrates QuickCoin's SDK into their e-commerce site, using the API key to
                        authenticate transactions. When a user clicks on the "Buy with Crypto" button, they are
                        redirected to QuickCoin's checkout page.</p></li>
                    <li><p>On the checkout page, the user connects their MetaMask wallet and selects the cryptocurrency
                        they wish to pay with. QuickCoin generates a new, unique address for each transaction and
                        displays it to the user, along with the amount due and any fees.</p></li>
                    <li><p>The user sends the cryptocurrency to the displayed address, and QuickCoin monitors the
                        blockchain for incoming transactions.</p></li>
                    <li><p>Once the payment is confirmed, QuickCoin notifies the merchant's site via a webhook, and the
                        user is redirected back to the merchant's site to complete the purchase.</p></li>
                    <li><p>The cryptocurrency is transferred to the merchant's wallet, minus any commission fees set by
                        QuickCoin.</p></li>
                </ol>
                <p>Overall, QuickCoin simplifies the process of accepting cryptocurrency payments for merchants, while
                    providing a seamless and secure experience for users.</p></div>
        </DefaultLayout>
    );
};

export default Home;

