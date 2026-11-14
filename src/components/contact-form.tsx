"use client";

import { useState, type FormEvent } from "react";
import { projectTypes } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Reveal } from "./ui/reveal";

const field =
  "w-full min-h-[52px] rounded-lg border border-edge-3 bg-panel-2 px-4 py-3.5 text-[16px] text-paper transition-[border-color,box-shadow] duration-200 placeholder:text-dim focus:border-lime focus:shadow-[0_0_0_3px_rgba(133,204,16,0.18)] max-[380px]:px-3.5 max-[380px]:py-3";
const label = "font-mono text-[12px] tracking-[0.08em] text-soft";
const row = "flex flex-col gap-2";

type Status = { tone: "idle" | "ok" | "error"; text: string };

/** Stagger for the form's children as they fade in (form itself starts at 0.1s). */
const d = (i: number) => 0.2 + i * 0.04;

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ tone: "idle", text: "" });
  const [emailInvalid, setEmailInvalid] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailInvalid(!ok);
    // TODO: connect to a form service (e.g. Formspree) or a Server Action / your backend.
    setStatus(
      ok
        ? { tone: "ok", text: "Thanks. This form is a placeholder until it is connected to your inbox." }
        : { tone: "error", text: "Please enter a valid email address, like you@company.com." },
    );
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
        <select id="tt-type" name="type" className={cn(field, "cursor-pointer appearance-none")}>
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
        delay={d(4)}
        className="min-h-[54px] cursor-pointer rounded-lg border-0 bg-lime text-[16px] font-medium text-ink transition-colors duration-200 hover:bg-lime-hi"
      >
        Send Message
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
          status.tone === "idle" && "text-soft",
        )}
      >
        {status.text}
      </Reveal>
    </Reveal>
  );
}
