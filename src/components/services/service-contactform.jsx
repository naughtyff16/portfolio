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
    <div className="flex flex-col justify-center w-full bg-white p-5 rounded-lg">
      {success && <p className="text-md text-white text-center">{success}</p>}
      {error && <p className="text-md text-yellow-500 text-center">{error}</p>}

      <div className="grid gap-4">
        <div>
          <label
            className="block text-lg text-primary font-medium mb-2"
            htmlFor="name"
          >
            Name*
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
            className="border-b-[0.5px] border-secondary w-full py-2 px-3 text-primary bg-transparent"
          />
        </div>

        <div>
          <label
            className="block text-lg text-primary font-medium mb-2"
            htmlFor="email"
          >
            Email*
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            className="border-b-[0.5px] border-secondary w-full py-2 px-3 text-primary bg-transparent"
          />
        </div>

        <div>
          <label
            className="block text-lg text-primary font-medium mb-2"
            htmlFor="email"
          >
            Company
          </label>
          <input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            placeholder="Enter Company"
            className="border-b-[0.5px] border-secondary w-full py-2 px-3 text-primary bg-transparent"
          />
        </div>

        <div>
          <label
            className="block text-lg text-primary font-medium mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number*
          </label>
          <input
            id="phoneNumber"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Enter phone number"
            className="border-b-[0.5px] border-secondary w-full py-2 px-3 text-primary bg-transparent"
          />
        </div>

        <div>
          <label
            className="block text-lg text-primary font-medium mb-2"
            htmlFor="email"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            rows={1}
            placeholder="Type"
            onChange={(e) => setMessage(e.target.value)}
            className="border-b-[0.5px] border-secondary w-full py-2 px-3 text-primary bg-transparent"
          />
        </div>

        <div className="my-2">
          <button
            onClick={submitForm}
            className="bg-primary hover:bg-red-700 text-white font-medium py-2 px-7 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
