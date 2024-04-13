import landingImg from "../assets/images/illustration-intro.png";

function Landing() {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center flex-col pt-[450px]">
          <div className="w-[750px] max-w-full">
            <img src={landingImg} className="w-full h-fit" />
          </div>
          <div className="text-white text-center">
            <h1
              className="text-[30px] font-semibold
                            md:text-[40px] mb-[15px]">
              All your files in one secure location
              <br />
              accessible anywhere.
            </h1>
            <p
              className="font-normal text-lg px-[15px] max-w-full text-gray-400 mb-[30px]
                         md:w-[600px] md:mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              tempora doloremque laudantium eligendi cumque, adipisci qui.
            </p>
          </div>
          <a
            href="/"
            className="btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium">
            Get Started
          </a>
        </div>
      </div>
      <div className="w-full h-[200px]">
        <img
          src="/src/assets/images/bg-curvy-desktop.svg"
          alt="img"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

export default Landing;
