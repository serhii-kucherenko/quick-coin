import {PropsWithChildren} from "react";
import {ConnectWallet, useConnect} from "@thirdweb-dev/react";

export const AuthenticatedLayout = ({children}: PropsWithChildren<{}>) => {
    const [{data, loading, error}, connect] = useConnect();
    const connected = data?.connected;

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error?.message}</div>
    }

    if (!connected) {
        return <ConnectWallet/>
    }

    return <>{children}</>
}
