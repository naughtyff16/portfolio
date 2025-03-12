import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClockIcon from "./icons/clock-icon";
import HeartIcon from "./icons/heart-icon";
import ChatIcon from "./icons/chat-icon";
import NextIcon from "./icons/next-icon";
import CloseIcon from "./icons/close-icon";
import Popup from "reactjs-popup";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    category: "HTML",
    title: "Innovation and Competitive Advantage",
    date: "02 May, 2024",
    likes: 10,
    comments: 5,
    description:
      "A successful team concentrates on producing ideas for different technology areas and identifying ways to execute them. Initially, this can provide businesses with a competitive advantage over their competitors while also allowing them to be more flexible in their operations. For example, retail companies that use artificial intelligence to analyze client demand may be able to reduce stock and waste, resulting in a range of costs associated with customer satisfaction.In particular markets, such as e-commerce, corporations with vested tech departments are typically the ones that develop new features that determine expectations for future customers. It has also been proved that without a solid IT staff, firms are likely to fall behind when the consumer's experience shifts to novel technologies being implemented by competitors.",
    image: "/images/blog1.png",
  },
  {
    id: 2,
    category: "CSS",
    title: "Operational Efficiency and Cost Savings",
    date: "02 May, 2024",
    likes: 10,
    comments: 5,
    description:
      "A good technology team is synonymous with a more efficient working environment. They relieve employees of time-consuming and arduous activities, reducing the possibility of mistakes caused by fatigue. Banks and other financial institutions, for example, utilize applications to handle data, reducing the amount of time spent on basic procedures and allowing personnel to focus on more difficult duties.In manufacturing and logistics, many tech teams have automated processes to replace monotonous human labor and increase productivity while lowering overhead expenses. Whether it's building an email marketing system or deciding on delivery notifications for inventories, the job done by the technicians has an impact on the net profit.",
    image: "/images/blog2.png",
  },
  {
    id: 3,
    category: "Fundamentals",
    title: "Enhanced Customer Experience",
    date: "02 May, 2024",
    likes: 7,
    comments: 5,
    description:
      "In a digital setting, consumers are always the kings or queens. People, particularly customers, now have high expectations for their interactions with brands and enterprises, demanding interface simplicity of use in the online world. Furthermore, website usability, page loading speeds, and PEST analysis performed by a skilled technical staff define consumer happiness to the fullest degree.For example, social media companies such as Netflix are constantly looking for ways to improve their general platform layout based on suggestions from their technical people. This degree of optimization not only assures that the users love the website, but also generates brand loyalty since the consumers assume that the experience they will always have will be pleasant.",
    image: "/images/blog3.png",
  },
  {
    id: 4,
    category: "Java",
    title: "Cybersecurity and Data Protection",
    date: "02 May, 2024",
    likes: 15,
    comments: 5,
    description:
      "As cybersecurity incidents rise, customer and corporate data become more susceptible than ever. Many firms that make the most of technology have strict security measures in place, including encryption, firewalls, and multi-factor authentication systems, to prevent data breaches.Consider the financial business, which places a high value on IT security, particularly cybersecurity. These firms' IT departments maintain security procedures that allow customers to trust them while also complying with legislation. They want dependable professionals who understand and can predict the rising threat of data breaches, as the consequences are tremendous when one occurs.",
    image: "/images/blog3.png",
  },
  {
    id: 5,
    category: "Java",
    title: "Scalability and Future-Proofing",
    date: "02 May, 2024",
    likes: 15,
    comments: 5,
    description:
      "As a firm grows, so do its technology requirements. Good and effective technology serves as the foundation for and guides the design of adaptable buildings to facilitate future development. Companies like Netflix and Airbnb now have millions of customers worldwide thanks to IT-based cloud scalability systems built and managed by their technical departments.To support such development for the company's digital assets, technical teams ensure that expansion is possible without necessitating drastic system change. This flexibility helps businesses to enter new markets, launch new services, and effectively handle new consumer flows.",
    image: "/images/blog3.png",
  },
];

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogOpen = (blog) => {
    setSelectedBlog(blog);
  };
  const handleBlogClose = () => {
    setSelectedBlog(null);
  };

  const PrevButton = ({ onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-0 left-10 transform -translate-y-1/2 bg-[#646464] p-2 rounded-sm hover:bg-primary z-10"
    >
      <NextIcon className="w-5 h-5 rotate-180 text-white" />
    </button>
  );

  const NextButton = ({ onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-0 left-24 transform -translate-y-1/2 bg-[#646464] p-2 rounded-sm hover:bg-primary z-10"
    >
      <NextIcon className="w-5 h-5 text-white" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="h-auto w-full bg-[#F6F3F3]">
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16 xl:gap-4 flex lg:flex-row lg:items-center flex-col">
        <div className="flex flex-col justify-center items-start gap-4">
          <p className="text-lg font-medium text-primary">Blogs</p>
          <p className="text-3xl font-bold">
            Why Every Company Needs a Strong Tech Team
          </p>
          <p className="text-sm font-normal text-justify w-full mb-8 text-gray-700">
            While it is established that technology is the main factor
            influencing modern firms' success, an appropriate IT team may
            greatly impact a business's success in a multitude of areas,
            including data retention, enhanced customer service, and process
            efficiency. These are the main reasons why it's critical to make
            future investments in a robust IT talent pool.
          </p>
        </div>

        <Slider {...settings} className="relative lg:w-3/4 pt-10">
          {blogs.map((blog, index) => (
            <div key={index} className="p-1 xl:p-2">
              <div className="relative -z-10">
                <Image
                  src={blog.image}
                  height={1400}
                  width={1000}
                  alt={blog.title}
                  className=" w-full h-full lg:h-[200px] xl:h-[240px] object-cover"
                />
                <p className="absolute top-2 left-0 bg-white text-primary text-xs px-4 py-1 rounded-r-sm">
                  {blog.category}
                </p>
              </div>
              <div className="flex justify-center items-center -mt-20">
                <div className="bg-white border border-gray-200 rounded-sm shadow-sm w-[95%] p-3 max-h-72 lg:max-h-96 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <ClockIcon />
                      <p className="text-xs">{blog.date}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="flex gap-2 items-center border-[#646464] border-r-2 px-2">
                        <HeartIcon />
                        <p className="text-xs">{blog.likes}</p>
                      </div>
                      <div className="flex gap-2">
                        <ChatIcon />
                        <p className="text-xs">{blog.comments}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start mt-3">
                    <div className="space-y-3 md:space-y-5">
                      <p className="text-xl font-medium">{blog.title}</p>
                      <p className="text-sm font-normal items-start text-gray-700">
                        {blog.description.length > 100
                          ? `${blog.description.substring(0, 100)}...`
                          : blog.description}
                      </p>
                      <div className="py-1">
                        <button
                          onClick={() => handleBlogOpen(blog)}
                          className="px-4 py-1 bg-primary text-white rounded-sm text-base font-normal border border-white"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {selectedBlog && (
        <Popup
          open={true}
          closeOnDocumentClick={false}
          onClose={handleBlogClose}
          overlayStyle={{ background: "rgba(0,0,0,0.4)" }}
        >
          <div className="bg-white rounded-lg shadow-lg p-4 w-full md:w-[500px] lg:w-[600px] mx-auto">
            <button
              onClick={handleBlogClose}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full hover:bg-red-700"
            >
              <CloseIcon />
            </button>
            <div className="max-h-[400px] overflow-y-auto p-2">
              <h3 className="text-lg font-bold mb-4 text-primary">
                {selectedBlog.title}
              </h3>
              <p className="text-black text-justify">
                {selectedBlog.description}
              </p>
            </div>
          </div>
        </Popup>
      )}
    </section>
  );
}
