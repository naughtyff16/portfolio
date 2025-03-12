import { useState } from "react";

import axios from "axios";

import ServiceContactform from "./service-contactform";
import MailIcon from "../icons/mail-icon";
import PhoneIcon from "../icons/phone-icon";
import Link from "next/link";
import Image from "next/image";

export default function () {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/api/leads",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        //console.log(JSON.stringify(response.data));
        if (response.data.error) setError(response.data.message);
        else {
          setSuccess(
            "Thank you for your enquiry. Our team will get back to you in a while."
          );
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setSuccess("Something went wrong");
      });
  };
  return (
    <div className="w-full h-auto bg-primary relative">
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 col-span-1 text-white justify-start items-start mx-auto z-10 xl:p-5">
          <p className="text-lg font-medium py-1">_____ {""}GET FREE QUOTE</p>
          <h1 className="text-4xl font-bold leading-tight">
            Ensure Your Project's Success with Cloud Rudra Media.
          </h1>
          <p className="text-lg py-2">
            Speak with our specialist, get an assessment, and implement our
            solutions.
          </p>
          <p className="leading-relaxed">
            Get your hands on our exceptional Full Life Cycle IT services, which
            include end-to-end support and expert coaching.
          </p>
          <div className="flex flex-col gap-10 pt-5 lg:pt-10">
            <div class="flex flex-wrap gap-6">
              <div className="flex gap-2 items-center hover:underline">
                <PhoneIcon className="text-white w-5 h-5" />{" "}
                <a href="tel:+91 90296 90500">+91 90296 90500</a>
              </div>
              <Link target="_blank" href={"mailto:info@cloudrudramedia.com"}>
                <div className="flex gap-2 items-center hover:underline">
                  <MailIcon className="text-white w-5 h-5" />
                  <p>info@cloudrudramedia.com</p>
                </div>
              </Link>
            </div>
            <div>
              <div className="bg-white text-primary text-sm px-5 py-2 rounded-sm inline-block">
                <Link href={"/contact-us"}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:p-5">
          <ServiceContactform />
        </div>
        <div className="hidden lg:block absolute -bottom-10 left-0">
          <Image
            src={"/images/services-bg-6.png"}
            width={500}
            height={300}
            quality={100}
            alt="corner image"
            className="lg:w-11/12 xl:w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
