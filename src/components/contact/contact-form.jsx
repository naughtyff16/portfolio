import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function () {
  let router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const submitForm = useCallback(async () => {
    setError("");
    setSuccess("");
    let data = JSON.stringify({
      name: name,
      email: email,
      company: company,
      phone: phone,
      message: message,
      page: router.pathname,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/api/leads",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      let res = await axios.request(config);
      console.log(res);
      if (res.error) {
        setError(res.message);
      } else {
        setSuccess(
          "Thank you! Someone from our team will get in touch with you soon."
        );
        setName("");
        setEmail("");
        setCompany("");
        setPhone("");
        setMessage("");
        setError("");
      }
    } catch (e) {
      setSuccess("");
      console.log(e);
      setError(e.response.data.message);
    }
  }, [name, email, company, phone, message]);
  return (
    <div className="grid md:grid-cols-2 w-full lg:w-4/5 bg-primary gap-6">
      <div>
        <Image
          src="/images/contact-us-1.png"
          width={1400}
          height={1000}
          alt="Digital Innovation"
          className="rounded-none w-full h-full"
        />
      </div>
      <div className="container mx-auto px-4 py-4 flex w-11/12">
        <div className="flex flex-col justify-center w-full">
          {success && (
            <p className="text-md text-white text-center">{success}</p>
          )}
          {error && (
            <p className="text-md text-yellow-300 text-center">{error}</p>
          )}

          <div className="grid gap-4 w-full">
            <div>
              <label
                className="block text-lg text-white font-medium mb-2"
                htmlFor="name"
              >
                Name*
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
                className="border-b-[0.5px] w-full h-12 px-4 text-white bg-transparent"
              />
            </div>

            <div>
              <label
                className="block text-lg text-white font-medium mb-2"
                htmlFor="email"
              >
                Email*
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Enter Email Id"
                className="border-b-[0.5px] w-full h-12 px-4 text-white bg-transparent"
              />
            </div>

            <div>
              <label
                className="block text-lg text-white font-medium mb-2"
                htmlFor="companyName"
              >
                Company
              </label>
              <input
                id="company"
                value={company}
                type="text"
                placeholder="Enter Company"
                onChange={(e) => setCompany(e.target.value)}
                className="border-b-[0.5px] w-full h-12 px-4 text-white bg-transparent"
              />
            </div>

            <div>
              <label
                className="block text-lg text-white font-medium mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number*
              </label>
              <input
                id="phoneNumber"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Enter Phone No"
                className="border-b-[0.5px] w-full h-12 px-4 text-white bg-transparent"
              />
            </div>

            <div>
              <label
                className="block text-lg text-white font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                rows={1}
                placeholder="Type"
                onChange={(e) => setMessage(e.target.value)}
                className="border-b-[0.5px] w-full h-12 px-4 text-white bg-transparent"
              />
            </div>

            <div className="my-2">
              <button
                onClick={submitForm}
                className="bg-white hover:bg-slate-200 text-primary font-medium py-2 px-7 rounded-lg focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
