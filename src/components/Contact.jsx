import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    const formDataObj = new FormData(event.target);
    formDataObj.append("access_key", "7c75a889-3493-46ba-82f1-a8b674c301a8");

    const object = Object.fromEntries(formDataObj);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setSuccessMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setSuccessMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-gap container-content">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel p-12 md:p-20 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left — Info */}
          <div>
            <span className="font-code text-primary text-sm uppercase tracking-widest mb-4 block">
              04 // Transmission Portal
            </span>

            <h2 className="font-display text-headline-lg mb-8">
              Let's build something<br />
              <span className="text-primary italic">together.</span>
            </h2>

            <p className="font-body text-body-lg text-on-surface-variant mb-12">
              Ready to initiate a new project or discuss architectural challenges?
              I'm currently available for freelance work and full-time opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="font-code text-sm">akashsharma9804@gmail.com</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="font-code text-sm">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={onSubmit} className="space-y-8">
            <div className="group">
              <label className="font-code text-[10px] uppercase text-primary mb-2 block tracking-widest">
                source_name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="IDENTITY_HERE"
                required
                className="w-full bg-surface-lowest border-0 border-b border-white/10 p-4 font-code text-sm focus:ring-0 focus:border-primary transition-colors placeholder:opacity-20 outline-none"
              />
            </div>

            <div className="group">
              <label className="font-code text-[10px] uppercase text-primary mb-2 block tracking-widest">
                source_email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ENCRYPTED_ADR"
                required
                className="w-full bg-surface-lowest border-0 border-b border-white/10 p-4 font-code text-sm focus:ring-0 focus:border-primary transition-colors placeholder:opacity-20 outline-none"
              />
            </div>

            <div className="group">
              <label className="font-code text-[10px] uppercase text-primary mb-2 block tracking-widest">
                payload_data
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="TRANSMISSION_CONTENT"
                required
                rows={4}
                className="w-full bg-surface-lowest border-0 border-b border-white/10 p-4 font-code text-sm focus:ring-0 focus:border-primary transition-colors placeholder:opacity-20 resize-none outline-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-container text-on-primary-container py-5 label-code hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Transmitting..." : "Send Message"}
            </motion.button>

            {successMessage && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm font-medium text-primary py-2 font-code"
              >
                {successMessage}
              </motion.p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
