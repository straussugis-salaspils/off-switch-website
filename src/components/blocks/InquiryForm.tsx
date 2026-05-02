"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    organization: "",
    role: "",
    type: "",
    description: "",
    contact: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-accent-surface border border-accent/20 p-8 lg:p-10">
        <p className="font-serif text-2xl font-light text-ink mb-3">
          Inquiry received.
        </p>
        <p className="text-base text-muted leading-relaxed">
          You will receive a response within two business days. If there is a clear fit,
          a conversation will be scheduled.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white border border-border px-4 py-3 text-sm text-ink placeholder:text-muted-light focus:outline-none focus:border-accent transition-colors";
  const labelClass = "block text-xs uppercase tracking-widest text-muted mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="organization">Organization</label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            value={form.organization}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="role">Role / position</label>
        <input
          id="role"
          name="role"
          type="text"
          value={form.role}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="type">Type of inquiry</label>
        <select
          id="type"
          name="type"
          required
          value={form.type}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>Select one</option>
          <option value="group-delivery">Group program delivery</option>
          <option value="crisis-response">Crisis-response deployment</option>
          <option value="research">Research or academic partnership</option>
          <option value="professional-referral">Professional referral or collaboration</option>
          <option value="other">Other / not sure yet</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="description">
          Brief description of context{" "}
          <span className="normal-case tracking-normal text-muted-light">(optional)</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={form.description}
          onChange={handleChange}
          placeholder="What is present in your organization, and what are you trying to understand?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="contact">Preferred contact method</label>
        <select
          id="contact"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Either</option>
          <option value="email">Email</option>
          <option value="video">Video call</option>
        </select>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email directly.
        </p>
      )}

      <Button type="submit" variant="primary" size="md" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send inquiry"}
      </Button>
    </form>
  );
}
