import {
    ConnectWallet, useAddress,
    useContract,
    useContractEvents,
    useContractRead,
    useContractWrite,
    Web3Button
} from "@thirdweb-dev/react";
import {ethers} from "ethers";
import {CONTRACT_ADDRESS} from "../../constants/main.constants";
import {useState} from "react";

export const ProfileActions = () => {
    const address = useAddress();
    const {contract} = useContract(CONTRACT_ADDRESS);
    const {data: apiKey, isLoading} = useContractRead(address ? contract : undefined, "getApiKey", address)
    const {data: event} = useContractEvents(contract, "ApiKeyGenerated")
    const {mutateAsync} = useContractWrite(
        contract,
        "processPayment",
    );

    return (
        <>
            <ConnectWallet/>

            {!apiKey && <Web3Button
                contractAddress={CONTRACT_ADDRESS}
                action={(contract) => contract.call("generateApiKey")}
                onSuccess={(response) => {
                    alert("success")
                    console.log(response)
                }}
                onError={() => {
                    alert("error")
                }}
                isDisabled={isLoading}
            >
                {isLoading ? 'Loading...' : 'Generate API Key'}
            </Web3Button>
            }
            {
                !isLoading && apiKey && <div>
                    <h3>API Key</h3>
                    <p>{apiKey}</p>
                </div>
            }
        </>
    )
};

