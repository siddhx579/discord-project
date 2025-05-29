import { currentProfile } from "@/lib/current-profile";
import { RedirectToSignIn } from "@clerk/nextjs";

interface ServerIdPageProps {
    params: {
        serverId: string;
    };
}

const ServerIdPage = async ({ params }: ServerIdPageProps) => {
    // const profile = await currentProfile();
    // if(!profile) {
    //     return RedirectToSignIn;
    // }
    return (
        <div>
            Server ID
        </div>
    )
}

export default ServerIdPage;