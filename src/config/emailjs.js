import emailjs from "@emailjs/browser";

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export async function sendContactEmail(formData) {
  if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
    throw new Error("Email service is not configured yet.");
  }

  return emailjs.send(emailConfig.serviceId, emailConfig.templateId, formData, {
    publicKey: emailConfig.publicKey,
  });
}
