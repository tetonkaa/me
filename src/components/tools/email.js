"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import * as emailjs from "emailjs-com";

const Contact = (props) => {
  const contactConfig = {
    USER_EMAIL: "angel.l.puente@gmail.com",
    description:
      "Need an app or website built? Write to us and we'll get back to you as soon as possible!",
    SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
    TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    USER_ID: process.env.NEXT_PUBLIC_USER_ID,
  };

  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });
    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.USER_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.SERVICE_ID,
        contactConfig.TEMPLATE_ID,
        templateParams,
        contactConfig.USER_ID
      )
      .then(
        (result) => {
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! Looking forward to reading your email.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          setFormdata({
            alertmessage: `Failed to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 secondaryBG"
      id="contact"
      name="section4"
    >
      <div className="container mx-auto  px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-white">
          contact me
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 max-w-md mx-auto secondaryBG"
        >
          <Input
            placeholder="Your Name"
            required
            style={{ color: "black" }}
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            placeholder="Your Email"
            required
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Textarea
            placeholder="Summary of your project..."
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            className="justify-self-center"
            type="submit"
            disabled={!formData.name || !formData.email || !formData.message}
          >
            {formData.loading ? "Sending..." : "Send"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
