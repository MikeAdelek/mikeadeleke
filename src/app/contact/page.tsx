"use client";

import { Card } from "@/Components/ui/Card";
import { Container } from "@/Components/ui/Container";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineSend } from "react-icons/md";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const dots = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const connectLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      description: "Let's connect professionally",
      url: "linkedin.com/in/micheal-olomola-frontend-dev",
      href: "https://www.linkedin.com/in/micheal-olomola-frontend-dev/"
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: "GitHub",
      description: "Check out my code",
      url: "github.com/MikeAdelek",
      href: "https://github.com/MikeAdelek"
    },
    {
      icon: <MdOutlineEmail className="w-6 h-6" />,
      title: "Email",
      description: "Get in touch with me",
      url: "oikeoluwa@gmail.com",
      href: "mailto:oikeoluwa@gmail.com"
    }
    // {
    //   icon: <Calendar className="w-6 h-6" />,
    //   title: "Schedule Call",
    //   description: "Book a 30-minute chat",
    //   url: "calendly.com/ololadeakinrinsola/30min",
    //   href: "https://calendly.com/ololadeakinrinsola/30min"
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-200">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full bg-cyan-400 opacity-20 animate-pulse"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              animationDuration: `${dot.duration}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-20 relative z-10">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Left Side - Get In Touch */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                I&apos;m always excited to discuss new opportunities,
                collaborate on projects, or just have a conversation about
                technology and development.
              </p>

              {/* Ways to Connect */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Ways to Connect
                </h3>
                <div className="space-y-4">
                  {connectLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <Card className="p-6 hover:border-cyan-400 transition-all duration-300 cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="bg-slate-700/50 p-3 rounded-lg text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all">
                            {link.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                              {link.title}
                            </h4>
                            <p className="text-slate-400 text-sm mb-2">
                              {link.description}
                            </p>
                            <p className="text-cyan-400 text-sm">{link.url}</p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Send Message Form */}
            <div>
              <Card className="p-8">
                <h3 className="text-3xl font-bold text-white mb-8">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <MdOutlineSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </Card>
            </div>
          </div>

          {/* Bottom Section - Let's Collaborate & Response Time */}
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mt-20">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let&apos;s Collaborate
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I&apos;m currently available for freelance projects and
                full-time opportunities. Whether you have a question, want to
                collaborate, or just want to say hi, I&apos;ll do my best to get
                back to you!
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Response Time
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I usually respond within 24-48 hours during weekdays. For urgent
                matters, feel free to reach out on LinkedIn for a faster
                response.
              </p>
            </Card>
          </div>
        </Container>
      </div>
    </div>
  );
}
