export default function () {
  return (
    <section id="location" className=" relative w-full bg-white">
      {/* <h1 className="text-center text-black text-3xl font-bold py-12 px-6 ">
        Our Location
      </h1> */}
      <div className="w-full h-[70vh] lg:h-[80vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.377267611577!2d72.9156381!3d19.091098399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7cc86ae7205%3A0x5e66699bab706e21!2sKanara%20Business%20Center!5e0!3m2!1sen!2sin!4v1735190649324!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          className="w-full h-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
