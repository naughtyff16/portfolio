import Image from "next/image";

export default function () {
  return (
    <section id="products" className="h-auto relative w-full bg-[#F6F3F3]">
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16 flex flex-col">
        <div className="flex flex-col justify-center items-start lg:items-center gap-4 pb-4 lg:pb-8">
          <p className="text-lg text-primary font-medium py-1">
            Products Lineup
          </p>
          <p className="text-3xl font-bold">
            IT Products for Seamless Operations
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 container lg:mx-auto w-full h-full justify-center py-4">
          <div className="w-full relative flex flex-col h-full">
            <Image
              src={"/images/product1.png"}
              width={1400}
              height={1000}
              alt="who we are image"
              className="h-full"
            />
            <div className="z-10">
              <div className="absolute bottom-12 w-auto space-y-5">
                <div>
                  <span className="left-0 bg-primary px-2 py-2 text-white rounded-sm text-sm">
                    Cut Costs Without Compromising Performance
                  </span>
                </div>
                <div className="flex px-2 py-2 bg-white text-black rounded-sm text-sm text-justify">
                  Optimize your IT investments with our innovative products.
                  Designed to drive efficiency and productivity, our solutions
                  deliver long-term savings and exceptional value.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative flex flex-col h-full">
            <Image
              src={"/images/product2.png"}
              width={1400}
              height={1000}
              alt="who we are image"
              className="h-full"
            />
            <div className="z-10">
              <div className="absolute bottom-12 w-auto space-y-5">
                <div>
                  <span className="left-0 bg-primary px-2 py-2 text-white rounded-sm text-sm">
                    Unmatched Quality and Reliability
                  </span>
                </div>
                <div className="flex px-2 py-2 bg-white text-black rounded-sm text-sm text-justify">
                  Our IT products offer advanced security features and
                  lightning-fast performance. Crafted by experts, they are built
                  to support your business's growth and evolving needs.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative flex flex-col h-full">
            <Image
              src={"/images/product3.png"}
              width={1400}
              height={1000}
              alt="who we are image"
              className="h-full"
            />
            <div className="z-10">
              <div className="absolute bottom-12 w-auto space-y-5">
                <div>
                  <span className="left-0 bg-primary px-2 py-2 text-white rounded-sm text-sm">
                    Confidence Through Control
                  </span>
                </div>
                <div className="flex px-2 py-2 bg-white text-black rounded-sm text-sm text-justify">
                  Trust in our products to provide transparency and
                  accountability. With cutting-edge tools and detailed reporting
                  capabilities, we empower your business to embrace true digital
                  transformation.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute -top-16 right-0 xl:-top-28 xl:right-0">
          <Image
            src={"/images/product-bg.png"}
            width={500}
            height={300}
            quality={100}
            alt="corner image"
            className="lg:w-[180px] xl:w-[250px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
