import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-[#1F2937] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white mb-8">
          About Our CEO
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <div className="w-full md:w-1/3">
            <img
              src="https://via.placeholder.com/500"
              alt="CEO Profile"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-white text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              eleifend urna. Ut euismod massa in mi gravida, sit amet tempus
              massa convallis. Etiam euismod bibendum urna, vel convallis velit
              commodo ac. Nullam quis dolor sit amet mi finibus bibendum non
              quis sapien. Sed non mauris vitae erat consequat auctor eu in
              elit. Sed pulvinar euismod eros, ut suscipit odio consequat ut.
              Aliquam scelerisque justo ut tincidunt commodo. Vestibulum vel
              tincidunt augue. Sed eget dapibus quam. Sed vestibulum est vel
              sollicitudin pharetra.
            </p>
            <p className="text-white text-lg leading-relaxed">
              Vestibulum sit amet dapibus felis. Fusce auctor sit amet nibh eget
              consectetur. In hac habitasse platea dictumst. Sed vestibulum
              turpis a metus tristique, vel efficitur ante consequat. Nulla
              facilisi. Vivamus rutrum mauris sed velit faucibus, sed congue mi
              efficitur. Sed ullamcorper ligula vitae metus eleifend, quis
              vehicula orci aliquam. Donec sagittis, mauris quis rhoncus
              sagittis, mauris erat bibendum quam, quis commodo velit enim ut
              orci.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-2">
                John Doe
              </h3>
              <p className="text-white font-semibold">Founder &amp; CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
