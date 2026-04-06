"use client";

import { useState } from "react";

export function EarlyAccessForm({ variant = "default" }: { variant?: "default" | "inline" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("You're in! Check your email for confirmation.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-xl bg-brand-700/10 px-6 py-4 text-center ${variant === "inline" ? "" : "mx-auto max-w-md"}`}>
        <p className="text-sm font-semibold text-brand-800">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${variant === "inline" ? "" : "mx-auto max-w-md"}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === "loading"}
        className="flex-1 rounded-[--radius-button] border border-brand-800/20 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-brand-700 focus:ring-2 focus:ring-brand-700/20 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="whitespace-nowrap rounded-[--radius-button] bg-brand-800 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-900 disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Get Early Access"}
      </button>
      {status === "error" && (
        <p className="absolute mt-14 text-xs text-red-600">{message}</p>
      )}
    </form>
  );
}
