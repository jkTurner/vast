"use client"

import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("General Inquiry");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const { data: user } = useUser();

    useEffect(() => {
        if (user) {
            setName((prev) =>  prev || user?.user_metadata?.full_name || "");
            setEmail((prev) => prev || user?.user_metadata?.email || "");
        }
    }, [user])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("/api/util/send-email", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message, topic }),
            });

            if (res.ok) {
                setStatus("Email sent successfully");
                setName("");
                setEmail("");
                setTopic("General Inquiry");
                setMessage("");
            } else {
                setStatus("Failed to send email");
            }
        } catch (error) {
            console.error("Error sending email: ", error);
            setStatus("Failed to send email");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex-1 bg-[var(--secondary)] p-sm">
                <div className="flex flex-col gap-sm">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="text-[var(--textLight)] border-b border-[var(--textKill)]
                            focus:outline-none focus:border-[var(--primary)] flex-1 py-1"
                    />
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="text-[var(--textLight)] border-b border-[var(--textKill)]
                            focus:outline-none focus:border-[var(--primary)] flex-1 py-1"
                    />

                    <div className="flex items-center gap-sm">

                        <label className="text-[var(--textLight)] text-sm">
                            Topic:
                        </label>

                        <div className="px-2 py-1 bg-[var(--bgMain)]">
                        <select
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            required
                            className="text-[var(--textLight)] broder-b border-[var(--textKill)] 
                                focus:outline-none focus:border-[var(--primary)] flex-1 py-1 bg-transparent"
                            >
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Order Question">Order Question</option>
                                <option value="Product Question">Product Question</option>
                                <option value="Collaboration Request">Collaboration Request</option>
                                <option value="Other">Other</option>
                        </select>
                        </div>
                    </div>

                    <textarea
                        placeholder="Message.."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="text-[var(--textLight)] bg-[var(--bgMain)] min-h-[160px] p-sm resize-none focus:outline-none"
                    />
                    
                    <span className="text-sm text-[var(--textLight)]">
                        to: <a href="mailto:support@vast-original.com" className="">support@vast-original.com</a>
                    </span>
                    {status && <p className="text-sm text-[var(--accent)]">{status}</p>}
                    <button
                        type="submit"
                        className="bg-[var(--primary)] text-[var(--secondary)] cursor-pointer px-4 py-2 hover:bg-[var(--accent)] text-sm"
                    >
                        Send
                    </button>
                </div>


            </form>
        </div>
    )
}

export default ContactForm;