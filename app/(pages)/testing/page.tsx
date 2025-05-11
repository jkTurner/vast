"use client"

import { useUser } from "@/hooks/useUser";
import { supabaseClientBrowser } from "@/utils/supabase/client";
import { useState } from "react";

const TestingPage = () => {

    const { data: user } = useUser();
    const [status, setStatus] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0] || null); //it's .files because input type="file"
        setStatus("");
    };

    const uploadAndSaveAvatar = async () => {
        if (!file || !user?.id) return;

        console.log("User ID = ", user.id);

        const fileName = `avatars/${user.id}-${Date.now()}-${file.name}`;
        const fileType = file.type;

        setStatus("Requesting singed upload URL...");
        const res = await fetch("/api/profile/update-avatar", {
            method: "POST",
            body: JSON.stringify({ fileName, fileType }),
            headers: { "Content-Type": "application/json"},
        });

        const { url, publicUrl } = await res.json();
        // debugging
        console.log("publicUrl = ", publicUrl);
        
        setStatus("Uploading image...");
        const uploadRes = await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": fileType },
            body: file,
        });

        if (!uploadRes.ok) {
            setStatus("Upload failed");
            return;
        }

        setStatus("Saving to Supabase...");

        const { error } = await supabaseClientBrowser()
            .from("profiles")
            .update({ avatar_url: publicUrl })
            .eq("id", user.id);

            if (error) {
                console.error(error);
                setStatus("Supabase update failed");
            } else {
                setStatus("Avatar updated!");
            }
    };

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-lg font-bold ">Upload Image to R2</h1>
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange} 
                className="bg-sky-700 text-secondary p-2 px-4 mr-2 rounded-xl" 
            />
            <button
                disabled={!file}
                onClick={uploadAndSaveAvatar}
                className="px-4 py-2 bg-accent text-primary rounded disabled:opacity-50"
            >
                Upload Image
            </button>
            <p>{status}</p>
        </div>
    )

}

export default TestingPage;



// "use client"

// import { useState } from "react";

// const TestingPage = () => {
    
//     const [status, setStatus] = useState("");

//     const uploadTestFile = async () => {
//         setStatus("Requesting presigned URL...");
//         const res = await fetch("/api/upload-url");
//         const { url, fileName } = await res.json();

//         setStatus("Uploading to R2...");
//         const uploadRes = await fetch(url, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "text/plain",
//             },
//             body: "Hello from Delta!",
//         });

//         if (uploadRes.ok) {
//             setStatus(`Upload complete! File: ${fileName}`);
//         } else {
//             setStatus("Upload failed");
//         }
//     };

//     return (
//         <div className="p-4">
//             <h1 className="text-xl font-bold">R2 Upload Test</h1>
//             <button 
//                 onClick={uploadTestFile}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
//             >
//                 Upload Test File
//             </button>
//             <p className="mt-4">{status}</p>
//         </div>
//     )
// }

// export default TestingPage;


