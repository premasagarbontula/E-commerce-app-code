import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Our Company"}>
      <div className="row about-us">
        <div className="col-md-6 text-center">
          <img
            src="/images/about-us-img.png"
            className="about-img"
            alt="aboutus-image"
          />
        </div>
        <div className="col-md-6">
          <h1 className="bg-dark text-white text-center mb-3 p-1">ABOUT US</h1>
          <p className="about-line">
            Ecommerce: Affordable Online Shopping at Your Fingertips There are
            many benefits of shopping online. You can take your time and look at
            different options to find exactly what you want. It's easy to
            compare prices online and find exactly what you are looking for.
          </p>
          <p className="about-line mt-1">
            And now with Ecommerce, you can shop for anything you want at the
            lowest prices in the market. Even if you want to shop for cool gifts
            for your friends and family, there are many options that you can
            find on the Internet.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
