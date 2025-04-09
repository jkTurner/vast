"use client";

import { useState } from "react";

const HelpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
        const res = await fetch("/api/util/send-email", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (res.ok) {
            setStatus("Email sent successfully");
            setName("");
            setEmail("");
            setMessage("");
        } else {
            setStatus("Failed to send email");
        }

    } catch (error) {
        console.error("Error sending email: ", error);
        setStatus("Failed to send email");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[var(--secondary)] p-md text-[var(--textLight)] flex flex-col gap-sm">
      <h3 className="font-bold text-[var(--textLight)]">Send us an email</h3>

      <div className="flex flex-col md:flex-row gap-sm">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="text-[var(--textLight)] border-b border-[var(--textKill)] focus:outline-none focus:border-[var(--primary)] flex-1 py-1"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text-[var(--textLight)] border-b border-[var(--textKill)] focus:outline-none focus:border-[var(--primary)] flex-1 py-1"
        />
      </div>

      <textarea
        placeholder="Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="text-[var(--textLight)] bg-[var(--bgMain)] min-h-[160px] p-sm resize-none focus:outline-none"
      />

      <div className="flex justify-between items-center">
        <span className="text-sm text-[var(--textLight)]">
            to: <a href="mailto:support@vast-original.com" className="">support@vast-original.com</a>
        </span>
        <div className="flex gap-sm items-center">
            {status && <p className="text-sm text-[var(--accent)]">{status}</p>}
            <button
            type="submit"
            className="bg-[var(--primary)] text-secondary cursor-pointer px-4 py-1 rounded-full hover:bg-[var(--accent)] text-sm"
            >
            Send
            </button>
        </div>
      </div>
    </form>
  );
};

export default HelpForm;