import {
    ConnectWallet,
    useAddress,
    useContract,
    useContractEvents,
    useContractRead,
    useContractWrite,
    Web3Button
} from "@thirdweb-dev/react";
import {CONTRACT_ADDRESS} from "../../constants/main.constants";

export const ProfileActions = () => {
    const address = useAddress();
    const {contract} = useContract(CONTRACT_ADDRESS);
    const {data: apiKey, isLoading, refetch} = useContractRead(address ? contract : undefined, "getApiKey", address)
    const {data: event} = useContractEvents(contract, "ApiKeyGenerated")

    return (
        <>
            <ConnectWallet/>

            {!apiKey && <Web3Button
                contractAddress={CONTRACT_ADDRESS}
                action={(contract) => contract.call("generateApiKey")}
                onSuccess={(response) => {
                    alert("success")
                    refetch();
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

