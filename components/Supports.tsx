import Image from "next/image";
import React from "react";
const Support_Images = [
  {
    image_src: "/supp_iit.png",
  },
  {
    image_src: "/supp_google.png",
  },
  {
    image_src: "/supp_samsung.png",
  },
  {
    image_src: "/supp_altbahari.png",
  },
  {
    image_src: "/supp_iit_kanput.png",
  },
];

const Supports = () => {
  return (
    <>
      <section className="pt-[10rem]">
        <div className="pb-36">
          <div className="mx-auto px-6 max-w-6xl text-gray-500">
            <div className="text-center">
              <h2 className="text-6xl text-gray-950 dark:text-white font-semibold tracking-tighter">
                Our Supporters <br />
              </h2>
              <p className="mt-6 text-gray-700 dark:text-gray-300">Sponsors & Partners </p>
            </div>
            <div className="mt-12  mx-auto flex justify-center flex-wrap gap-9">
              {Support_Images.map((val, ind) => {
                return (
                  <div key={ind}>
                    <Image
                      alt="John Doe"
                      src={val.image_src}
                      className="rounded-sm"
                      loading="lazy"
                      width={200}
                      height={120}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Supports;
