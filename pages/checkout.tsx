import type {NextPage} from "next";
import {DefaultLayout} from "../src/layouts/DefaultLayout";
import {CheckoutActions} from "../src/features/checkout/CheckoutActions";
import {CheckoutLayout} from "../src/layouts/CheckoutLayout";
import {AuthenticatedLayout} from "../src/layouts/AuthenticatedLayout";


const Profile: NextPage = () => {
    return (
        <DefaultLayout>
            <AuthenticatedLayout>
            <CheckoutLayout>
                <CheckoutActions/>
            </CheckoutLayout>
            </AuthenticatedLayout>
        </DefaultLayout>
    );
};

export default Profile;
