"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL, projectTypes } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Reveal } from "./ui/reveal";

const field =
  "w-full min-h-[52px] rounded-lg border border-edge-3 bg-panel-2 px-4 py-3.5 text-[16px] text-paper transition-[border-color,box-shadow] duration-200 placeholder:text-dim focus:border-lime focus:shadow-[0_0_0_3px_rgba(133,204,16,0.18)] max-[380px]:px-3.5 max-[380px]:py-3";
const label = "font-mono text-[12px] tracking-[0.08em] text-soft";
const row = "flex flex-col gap-2";

// Submissions go to Web3Forms, which emails them to us. The access key is public by design
// (it only lets people send *to* us), but we still keep it out of the repo: it comes from an
// environment variable (NEXT_PUBLIC_ = readable by browser code; inlined at build time).
const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = { tone: "idle" | "sending" | "ok" | "error"; text: string };

const FAILED = `Something went wrong. Please email us at ${CONTACT_EMAIL} instead.`;

/** Stagger for the form's children as they fade in (form itself starts at 0.1s). */
const d = (i: number) => 0.2 + i * 0.04;

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ tone: "idle", text: "" });
  const [emailInvalid, setEmailInvalid] = useState(false);
  const sending = status.tone === "sending";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    const form = e.currentTarget; // keep a reference: currentTarget is cleared after the first await
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailInvalid(!emailOk);
    if (!emailOk) {
      setStatus({ tone: "error", text: "Please enter a valid email address, like you@company.com." });
      return;
    }
    if (!message) {
      setStatus({ tone: "error", text: "Please tell us a little about your project." });
      return;
    }
    if (!ACCESS_KEY) {
      console.error("Contact form: NEXT_PUBLIC_WEB3FORMS_KEY is not set.");
      setStatus({ tone: "error", text: FAILED });
      return;
    }

    setStatus({ tone: "sending", text: "Sending…" });
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        // All fields, including the hidden "botcheck" trap, so Web3Forms can discard bot submissions.
        body: JSON.stringify({
          ...Object.fromEntries(data),
          access_key: ACCESS_KEY,
          subject: "New enquiry from techtilde.com",
          from_name: "TechTilde website",
        }),
        signal: controller.signal,
      });
      const result: { success?: boolean } = await res.json();
      if (res.ok && result.success) {
        form.reset();
        setStatus({ tone: "ok", text: "Thanks! Your message is on its way. We'll reply by email soon." });
      } else {
        setStatus({ tone: "error", text: FAILED });
      }
    } catch {
      setStatus({ tone: "error", text: FAILED });
    } finally {
      clearTimeout(timeout);
    }
  }

  return (
    <Reveal
      as="form"
      id="tt-form"
      noValidate
      aria-label="Project enquiry"
      delay={0.1}
      onSubmit={onSubmit}
      className="flex flex-col gap-5 rounded-xl border border-edge-2 bg-panel p-[clamp(24px,3vw,40px)]"
    >
      {/* Spam trap: invisible to people, bots tend to tick it. Web3Forms drops those submissions. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <Reveal delay={d(0)} className={row}>
        <label htmlFor="tt-name" className={label}>
          NAME
        </label>
        <input id="tt-name" name="name" className={field} type="text" autoComplete="name" placeholder="Your name" />
      </Reveal>
      <Reveal delay={d(1)} className={row}>
        <label htmlFor="tt-email" className={label}>
          EMAIL
        </label>
        <input
          id="tt-email"
          name="email"
          className={field}
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          aria-invalid={emailInvalid}
          aria-describedby="tt-form-msg"
          onChange={() => {
            setEmailInvalid(false);
            setStatus({ tone: "idle", text: "" });
          }}
        />
      </Reveal>
      <Reveal delay={d(2)} className={row}>
        <label htmlFor="tt-type" className={label}>
          PROJECT TYPE
        </label>
        <select id="tt-type" name="project_type" className={cn(field, "cursor-pointer appearance-none")}>
          {projectTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Reveal>
      <Reveal delay={d(3)} className={row}>
        <label htmlFor="tt-msg" className={label}>
          MESSAGE
        </label>
        <textarea
          id="tt-msg"
          name="message"
          className={cn(field, "min-h-[140px] resize-y")}
          rows={5}
          placeholder="Tell us a little about your project"
        />
      </Reveal>
      <Reveal
        as="button"
        type="submit"
        disabled={sending}
        aria-busy={sending}
        delay={d(4)}
        className="min-h-[54px] cursor-pointer rounded-lg border-0 bg-lime text-[16px] font-medium text-ink transition-colors duration-200 hover:bg-lime-hi disabled:cursor-not-allowed disabled:opacity-70"
      >
        {sending ? "Sending…" : "Send Message"}
      </Reveal>
      <Reveal
        as="p"
        id="tt-form-msg"
        role="status"
        delay={d(5)}
        className={cn(
          "min-h-[22px] text-[14px]",
          status.tone === "ok" && "text-ok",
          status.tone === "error" && "text-err",
          (status.tone === "idle" || status.tone === "sending") && "text-soft",
        )}
      >
        {status.text}
      </Reveal>
      <Reveal as="p" delay={d(6)} className="text-[12px] leading-[1.6] text-dim">
        Your details are delivered to us through Web3Forms and used only to reply to your enquiry.
      </Reveal>
    </Reveal>
  );
}
