import React from "react";
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import cat from "../img/cat.jpg";

const AboutPage = () => {
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(-2rem)" },
    to: { opacity: 1, transform: "translateY(2rem)" },
    config: { duration: 500 },
  });

  return (
    <div className="pages">
      <div className="wrapper">
        <animated.div style={props}>
          <div className="about-page">
            <div className="photo-block">
              <img className="photo-block_img" src={cat} alt="#" />
              <a href="https://www.linkedin.com/in/isan-matenov-20a073248/">
                Мой профиль в Linkedin
              </a>
            </div>
            <div className="text-block">
              <h2>О сайте</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique ex tenetur perspiciatis eius. Accusamus quibusdam
                animi aliquam molestias, quia deleniti ipsa mollitia sint id
                voluptatem laudantium nostrum? Nesciunt aspernatur soluta,
                blanditiis quam aliquid accusantium rerum omnis molestiae dolor
                culpa minima consectetur eos illo porro nulla illum sequi quae
                facere officia?
              </p>
              {/* <div className="device_block dark:bg-slate-900 text-white h-screen">
              <h1 className="text-3xl font-bold underline ">Tailwind</h1>{" "}
            </div> */}
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
};
export default AboutPage;
