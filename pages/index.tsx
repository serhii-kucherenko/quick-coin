import type {NextPage} from "next";
import {useRouter} from "next/router";
import {DefaultLayout} from "../src/layouts/DefaultLayout";

const Home: NextPage = () => {
    const router = useRouter();

    return (
        <DefaultLayout>
            <h2>Welcome to the QuickCoin</h2>

            <button onClick={() => router.push('/profile')}>Try It Out</button>
        </DefaultLayout>
    );
};

export default Home;
