import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { sendContactEmail } from "../../config/emailjs";

import "./Contact.css";

const emptyForm = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (Object.values(form).some((value) => !value.trim())) {
      setStatus({ type: "error", message: "Please complete every field before sending." });
      return;
    }

    setIsSending(true);
    try {
      await sendContactEmail({ from_name: form.name, reply_to: form.email, subject: form.subject, message: form.message, to_name: "Siddhesh Bhurke" });
      setForm(emptyForm);
      setStatus({ type: "success", message: "Thank you - your message has been sent." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to send your message. Please email Siddhesh directly." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container contact-layout">
        <motion.div className="contact-intro" initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <p className="section-label">Contact</p>
          <h2 id="contact-heading">Let&apos;s build something meaningful.</h2>
          <p>Whether it&apos;s Generative AI, Machine Learning, Computer Vision or intelligent automation, I&apos;m always interested in solving challenging problems and collaborating on impactful products.</p>
          <address className="contact-details">
            <a href="mailto:siddheshbhurke28@gmail.com"><span>Email</span>siddheshbhurke28@gmail.com</a>
            <a href="tel:+917498030685"><span>Phone</span>+91 7498030685</a>
            <p><span>Location</span>Pune, Maharashtra, India</p>
          </address>
          <nav className="contact-links" aria-label="Professional profiles">
            <a href="https://www.linkedin.com/in/siddheshbhurke/" target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight aria-hidden="true" /></a>
            <a href="https://github.com/siddheshbhurke" target="_blank" rel="noreferrer">GitHub <FiArrowUpRight aria-hidden="true" /></a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume <FiArrowUpRight aria-hidden="true" /></a>
          </nav>
        </motion.div>

        <form className="contact-form" onSubmit={submitForm} noValidate>
          <div className="contact-field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" value={form.name} onChange={updateField} autoComplete="name" required /></div>
          <div className="contact-field"><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required /></div>
          <div className="contact-field"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" value={form.subject} onChange={updateField} required /></div>
          <div className="contact-field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" value={form.message} onChange={updateField} rows="6" required /></div>
          {status.message && <p className={`form-status form-status-${status.type}`} role={status.type === "error" ? "alert" : "status"}>{status.message}</p>}
          <button className="contact-submit" type="submit" disabled={isSending}>{isSending ? "Sending..." : "Submit"}</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
