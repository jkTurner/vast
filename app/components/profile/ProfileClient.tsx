'use client'

import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import BirthDate from "./BirthDate";
import MainButton from "../ui/buttons/MainButton";
import GenderSelect from "./GenderSelect";
import InputField from "../ui/form/InputField";
import ProfileAvatar from "./ProfileAvatar";


const ProfileClient = () => {

    const { data: user, isLoading } = useUser();
    const email = user?.email || "Email";

    const [status, setStatus] = useState("");

    const [fullName, setFullName] = useState("");
    const [birthDate, setBirthDate] = useState<Date | null>(null);
    const DEFAULT_GENDER = "Unspecified";
    const [gender, setGender] = useState(DEFAULT_GENDER);

    useEffect(() => {
        if (!user) return;

        setFullName(user.full_name || "");
        setBirthDate(user.birth_date || null);
        setGender(user.gender || DEFAULT_GENDER);
    }, [user]);

      const handleSave = async () => {

        setStatus("Updating profile...")

        try {
            const res = await fetch("/api/profile/update-profile", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    full_name: fullName,
                    birth_date: birthDate ? birthDate.toISOString().split("T")[0] : null,
                    gender,
                }),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Unknown error");
            } else {
                setStatus("Successfully updated profile.");
            }
        } catch (error) {
            console.error("Failed to update profile: ", error);
        }
      }

    return (
        <>
            {/* General Profile Section */}
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSave();
                }}
                className="flex flex-col gap-sm p-sm bg-[var(--secondary)]"
            >

                {/* Avatar */}
                <ProfileAvatar />

                {/* All Fields */}
                <div className="flex flex-col gap-xs">
                    
                    <InputField label="Full Name" id="fullName" inputValue={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <InputField label="Email" id="email" inputValue={isLoading ? "Loading..." : email} disabled />
                    <BirthDate dob={birthDate} setDob={setBirthDate} />
                    <GenderSelect gender={gender} setGender={setGender} />

                    <div className="self-end flex items-center gap-sm">
                        { status && (
                            <p>{status}</p>
                        )}
                        <MainButton name="Save" type="submit" />
                    </div>
                    
                </div>
            </form>

            {/* Address Section */}
            
        </>
    )
}

export default ProfileClient;