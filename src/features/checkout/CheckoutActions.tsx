import {
    ConnectWallet,
    useContract,
    useContractWrite,
    Web3Button
} from "@thirdweb-dev/react";
import {ethers} from "ethers";
import {CONTRACT_ADDRESS} from "../../constants/main.constants";
import {useRouter} from "next/router";

export const CheckoutActions = () => {
    const router = useRouter();
    const {apiKey} = router.query;

    const {contract} = useContract(CONTRACT_ADDRESS);
    const {mutateAsync: processPayment} = useContractWrite(
        contract,
        "processPayment",
    );

    return (
        <>
            <ConnectWallet/>

            <Web3Button
                contractAddress={CONTRACT_ADDRESS}
                action={(contract) => {
                    return processPayment([
                        apiKey,
                        {
                            gasLimit: 1000000,
                            value: ethers.utils.parseEther("0.001"),
                        }
                    ])
                }}

                onSuccess={(response) => {
                    alert("Payment successful with amount of 0.001 MATIC")
                    console.log(response)
                }}
                onError={() => {
                    alert("error")
                }}
            >
                Pay for Product
            </Web3Button>
        </>
    )
};

