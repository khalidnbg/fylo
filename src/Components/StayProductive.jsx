function StayProductive() {
  return (
    <section>
      <div
        className="container grid grid-cols-1 place-items-center
        md:grid-cols-2 gap-[30px]">
        <div>
          <img
            src="/src/assets/images/illustration-stay-productive.png"
            alt="illustration-stay-productive"
          />
        </div>
        <div className="text-white">
          <h3 className="font-medium text-[35px] leading-[50px]">
            Stay productive <br /> wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              facere exercitationem perferendis omnis deleniti adipisci
              dignissimos doloremque obcaecati explicabo praesentium. Odio
              assumenda dolorum quae voluptatem neque, dolores sequi dolorem
              accusantium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis vel officiis eligendi voluptas, repudiandae autem
              magnam aliquam laborum quod, nam ipsam ullam inventore iusto
              quisquam impedit et eos tempore veniam?
            </p>
          </div>
          <a
            href="/"
            className="text-primaryColor 
            border-b-2 border-primaryColor border-solid pb-[5px] 
            flex items-start gap-[15px] w-fit
            hover:text-[#42b0d1] transition-colors duration-200
             ">
            See how Fylo works
            <img
              src="/src/assets/images/icon-arrow.svg"
              alt="arrow"
              className="w-[20px] h-[20px] object-contain 
              animate-[moveRight_1s_ease-in-out_infinite]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default StayProductive;
