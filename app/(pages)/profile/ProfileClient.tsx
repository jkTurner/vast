'use client'

import SignOutButton from "@/app/components/(auth)/SignOutButton";
// import SignOutButton from "@/app/components/(auth)/SignOutButton";
import { useUser } from "@/hooks/useUser";


const ProfileClient = () => {

    const { data: user, isLoading } = useUser();

    const name = user?.user_metadata?.full_name || "Friend";

    return (
        <div className="flex flex-col gap-sm h-[800px] items-center">
            <h1>Profile Page In The Making!</h1>
            <div>
                <span>Welcome, </span>
                <span>{isLoading ? "Loading..." : name} </span>
            </div>
            <SignOutButton />
        </div>
    )
}

export default ProfileClient;