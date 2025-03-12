import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What does Cloud Rudra Media specialize in?",
    answer: [
      {
        contents1:
          "Cloud Rudra Media specializes in providing comprehensive IT solutions, including software development, web development, mobile app development, cloud solutions, IT infrastructure, and cybersecurity.",
      },
    ],
  },
  {
    id: 2,
    question: "What is the process for using Cloud Rudra Media's services?",
    answer: [
      {
        contents1:
          "Initial Consultation: We begin with a detailed discussion to understand your specific needs and goals.",
        contents2:
          "Solution Design: Our experts will design a customized solution tailored to your requirements.",
        contents3:
          "Project Execution: Our skilled team will implement the solution, ensuring seamless integration.",
        contents4:
          "Ongoing Support and Maintenance: We provide ongoing support to keep your systems running smoothly.",
      },
    ],
  },
  {
    id: 3,
    question: "How may Cloud Rudra Media benefit my business?",
    answer: [
      {
        contents1:
          "Improving Efficiency: Streamlining processes and automating tasks.",
        contents2:
          "Enhancing Productivity: Empowering your team with the latest tools and technologies.",
        contents3:
          "Boosting Innovation: Driving innovation through cutting-edge solutions.",
        contents4:
          "Strengthening Security: Protecting your valuable data and systems.",
        contents5:
          "Reducing Costs: Optimizing your IT infrastructure and operations.",
      },
    ],
  },
  {
    id: 4,
    question:
      "What differentiates Cloud Rudra Media from other IT service providers?",
    answer: [
      {
        contents1:
          "Deep Industry Expertise: Our team has extensive experience in various industries.",
        contents2:
          "Customer-Centric Approach: We prioritize your needs and tailor solutions accordingly.",
        contents3:
          "Innovative Solutions: We embrace emerging technologies to deliver cutting-edge solutions.",
        contents4:
          "Strong Partnerships: We collaborate with leading technology providers to offer the best solutions.",
        contents5:
          "Commitment to Quality: We deliver high-quality services and maintain the highest standards.",
      },
    ],
  },
  {
    id: 5,
    question:
      "Can Cloud Rudra Media help with both new projects and current systems?",
    answer: [
      {
        contents1:
          "Yes, we can help with both new projects and existing systems. Our experts can assess your current IT infrastructure, identify areas for improvement, and implement solutions to optimize your operations.",
      },
    ],
  },
  {
    id: 6,
    question: "How do I start using Cloud Rudra Media's services?",
    answer: [
      {
        contents1:
          "Simply reach out to us through our website or contact information. We'll schedule a consultation to discuss your specific needs and provide a tailored solution.",
      },
    ],
  },
  {
    id: 7,
    question: "Does Cloud Rudra Media work with enterprises of any size?",
    answer: [
      {
        contents1:
          "Yes, we work with businesses of all sizes, from startups to large enterprises. Our flexible approach allows us to tailor our services to meet the unique needs of each client.",
      },
    ],
  },
  {
    id: 8,
    question: "Which industries does Cloud Rudra Media serve?",
    answer: [
      {
        contents1: "We serve a wide range of industries, including:",
        contents2: "Technology",
        contents3: "Finance",
        contents4: "Healthcare",
        contents5: "Retail",
        contents6: "Education",
        contents7: "Manufacturing",
      },
    ],
  },
  {
    id: 9,
    question:
      "How does Cloud Rudra Media prioritize the user experience in its solutions?",
    answer: [
      {
        contents1: "We prioritize user experience by:",
        contents2: "Designing intuitive and user-friendly interfaces",
        contents3: "Optimizing performance and responsiveness",
        contents4: "Providing excellent customer support",
      },
    ],
  },
  {
    id: 10,
    question:
      "What might I expect from Cloud Rudra Media as a long-term partner?",
    answer: [
      {
        contents1: "As a long-term partner, you can expect:",
        contents2:
          "Proactive Support: We'll anticipate your needs and proactively address potential issues.",
        contents3: "Scalability: Our solutions can grow with your business.",
        contents4:
          "Trust and Transparency: We'll maintain open and honest communication.",
      },
    ],
  },
];

export default function () {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpansion = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className="h-auto relative w-full bg-white mx-auto py-12 px-4 md:px-12 lg:px-16">
      <div className="container flex flex-col">
        <div className="flex flex-col justify-center items-start lg:items-center gap-4 pb-4 lg:pb-8">
          <h4 className="text-lg text-primary font-medium py-1">
            Ask Question
          </h4>
          <p className="text-3xl font-bold">FAQ</p>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="w-full">
            {faqs.slice(0, 5).map((faq) => (
              <div key={faq.id} className="border-b-[1px] p-4 mb-4">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleExpansion(faq.id)}
                >
                  <p className="text-black text-sm mb-2 pr-4 text-left grow">
                    {faq.id}. {faq.question}
                  </p>
                  <span className="text-secondary text-3xl flex-shrink-0">
                    {expandedItem === faq.id ? "-" : "+"}
                  </span>
                </div>
                {expandedItem === faq.id && (
                  <ul className="list-disc pl-5 space-y-3 text-secondary text-sm">
                    {faq.answer.map((ans, idx) => (
                      <React.Fragment key={idx}>
                        {ans.contents1 && <li>{ans.contents1}</li>}
                        {ans.contents2 && <li>{ans.contents2}</li>}
                        {ans.contents3 && <li>{ans.contents3}</li>}
                        {ans.contents4 && <li>{ans.contents4}</li>}
                        {ans.contents5 && <li>{ans.contents5}</li>}
                        {ans.contents6 && <li>{ans.contents6}</li>}
                        {ans.contents7 && <li>{ans.contents7}</li>}
                      </React.Fragment>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="w-full">
            {faqs.slice(5, 10).map((faq) => (
              <div key={faq.id} className="border-b-[1px] p-4 mb-4">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleExpansion(faq.id)}
                >
                  <p className="text-black text-sm mb-2 pr-4 text-left grow">
                    {faq.id}. {faq.question}
                  </p>
                  <span className="text-secondary text-3xl flex-shrink-0">
                    {expandedItem === faq.id ? "-" : "+"}
                  </span>
                </div>
                {expandedItem === faq.id && (
                  <ul className="list-disc pl-5 space-y-3 text-secondary text-sm">
                    {faq.answer.map((ans, idx) => (
                      <React.Fragment key={idx}>
                        {ans.contents1 && <li>{ans.contents1}</li>}
                        {ans.contents2 && <li>{ans.contents2}</li>}
                        {ans.contents3 && <li>{ans.contents3}</li>}
                        {ans.contents4 && <li>{ans.contents4}</li>}
                        {ans.contents5 && <li>{ans.contents5}</li>}
                        {ans.contents6 && <li>{ans.contents6}</li>}
                        {ans.contents7 && <li>{ans.contents7}</li>}
                      </React.Fragment>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
