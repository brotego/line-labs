"use client";

import { useState, type FormEvent } from "react";
import ArrowIcon from "./ArrowIcon";

export default function ContactForm() {
  const [note, setNote] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNote("Thanks — we'll be in touch shortly.");
    e.currentTarget.reset();
  };

  return (
    <form className="contact-form" id="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-row">
        <label htmlFor="message">Tell us about your project</label>
        <textarea id="message" name="message" rows={4} required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Send message
        <ArrowIcon />
      </button>
      <p className="form-note" id="form-note" role="status" aria-live="polite">{note}</p>
    </form>
  );
}
