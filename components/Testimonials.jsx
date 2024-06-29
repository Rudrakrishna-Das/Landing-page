import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="p-16 max-sm:px-4 max-sm:text-center duration-500">
      <div className="p-10 bg-slate-100 rounded-lg flex flex-col gap-10">
        <div className="flex items-center max-sm:justify-center gap-4">
          <Image src="/icons/quote.svg" alt="quote" height={30} width={30} />
          <h1 className="font-bold">Testimonials</h1>
        </div>
        <p>
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className="flex gap-4 items-center justify-around max-lg:flex-col-reverse">
          <Image
            src="/icons/audiotrack.svg"
            alt="audio track"
            height={20}
            width={600}
          />

          <div className="flex items-center gap-2">
            <Image
              src="/icons/personimage.svg"
              className="w-16 h-16"
              alt="quote"
              height={30}
              width={30}
            />
            <div className="ml-4">
              <h1 className="font-bold text-v-1 text-[88%] max-md:text-[120%] max-sm:text-[90%]">
                Subha Nagarjan
              </h1>
              <p className="text-b-1 text-[10px]">Classical dancer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
