import {PropsWithChildren} from "react";
import {ConnectWallet, useContract, useContractRead, useLogin} from "@thirdweb-dev/react";
import {useRouter} from "next/router";
import {CONTRACT_ADDRESS} from "../constants/main.constants";

export const CheckoutLayout = ({children}: PropsWithChildren<{}>) => {
    const router = useRouter();
    const {apiKey} = router.query;
    const {contract} = useContract(CONTRACT_ADDRESS);

    if (!apiKey) {
        return <div>
            <h3>Missing API Key</h3>
            <p>API Key is required to access this page.</p>
            <button onClick={
                () => router.push("/")
            }>Redirect to home
            </button>
        </div>
    }

    return <>{children}</>
}
