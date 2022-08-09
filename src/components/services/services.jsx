import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
          </ul>
        </article>
        {/*End of UI */}
        <article className="service">
          <div className="service_head">
            <h3>Web Developement</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
          </ul>
        </article>
        {/*End of Web Dev */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
          </ul>
        </article>
        {/*End of content creation */}
      </div>
    </section>
  );
}

export default Services;
