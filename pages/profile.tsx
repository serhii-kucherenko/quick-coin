import type {NextPage} from "next";
import {DefaultLayout} from "../src/layouts/DefaultLayout";
import {ProfileActions} from "../src/features/profile/ProfileActions";
import {AuthenticatedLayout} from "../src/layouts/AuthenticatedLayout";


const Profile: NextPage = () => {
    return (
        <DefaultLayout>
            <AuthenticatedLayout>
                <ProfileActions/>
            </AuthenticatedLayout>
        </DefaultLayout>
    );
};

export default Profile;
