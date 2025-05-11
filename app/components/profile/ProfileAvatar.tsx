'use client'

import { CameraCircleIcon } from "@/assets/Icons";
import { useUser } from "@/hooks/useUser"
import { supabaseClientBrowser } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MainButton from "../ui/buttons/MainButton";

const ProfileAvatar = () => {

    const { data: user } = useUser();

    const [avatar, setAvatar] = useState<string | null | undefined>(user?.avatar_url)
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [status, setStatus] = useState("");

    const handleClick = () => {
        fileInputRef.current?.click();
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0] || null;
        setFile(selected);
        setStatus("");
        if (selected) {
            const previewUrl = URL.createObjectURL(selected);
            setAvatar(previewUrl);
        }
    }

    const handleUpload = async () => {
        if (!file || !user?.id) return

        const fileName = `avatars/${user.id}-${Date.now()}-${file.name}`
        const fileType = file.type

        try {
            // setStatus("Requesting signed URL...")
            const res = await fetch("/api/profile/update-avatar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fileName, fileType }),
            })

            const { url, publicUrl } = await res.json()
            setStatus("Uploading image...")
            const uploadRes = await fetch(url, {
                method: "PUT",
                headers: { "Content-Type": fileType },
                body: file,
            })

            if (!uploadRes.ok) throw new Error("Failed to upload to R2");
            
            // setStatus("Saving to Supabase...");
            const { error } = await supabaseClientBrowser()
                .from("profiles")
                .update({ avatar_url: publicUrl })
                .eq("id", user.id)

            if (error) {
                console.error(error)
                setStatus("Failed to save avatar URL")
                return
            }

            setStatus("Image updated!");
            setAvatar(publicUrl);
            setFile(null)
        } catch (error) {
            console.error(error);
            setStatus("Something went wrong");
        }
    }

    useEffect(() => {
        if (user?.avatar_url) {
            setAvatar(user.avatar_url);
        }
    }, [user])

    return (
        <div className="flex gap-sm items-center">
            <div
                onClick={handleClick}
                className="w-3xl h-3xl overflow-hidden relative cursor-pointer"
            >
                <div className="absolute right-0 bottom-0 z-10">
                    <CameraCircleIcon size={28} />
                </div>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />
                {avatar ? (
                    <Image
                        src={avatar}
                        alt="Profile Image"
                        fill
                        className="nextImage rounded-full"
                    />
                ) : (
                    <Image
                        src="/images/placeholder-profile-image.jpg"
                        alt="Placeholder Profile Image"
                        fill
                        className="nextImage rounded-full"
                    />
                )}
            </div>
            <div className="flex flex-col gap-xxs">
                {file && (
                    <MainButton onClick={handleUpload} name="Save Image" />
                )}
                {status && <p>{status}</p>}
            </div>
        </div>
    )
}

export default ProfileAvatar;