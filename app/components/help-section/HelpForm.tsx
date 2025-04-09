"use client";

import { useState } from "react";

const HelpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can later hook this to an email service or backend endpoint
    console.log({ name, email, message });
    alert("Your message has been sent!");
    setName("");
    setEmail("");
    setMessage("");
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
        <button
          type="submit"
          className="bg-[var(--primary)] text-secondary cursor-pointer px-4 py-1 rounded-full hover:bg-[var(--accent)] text-sm"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default HelpForm;