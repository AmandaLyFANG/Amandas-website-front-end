// https://blog.hubspot.com/marketing/best-personal-websites
// https://jopecuro.com/

import React from "react"
// import ScrollAnimationComponent from "../navbar/ScrollAnimation"
import "animate.css/animate.min.css"
// import { TimelineAnimation } from "@/components/TimelineAnimation/TimelineAnimation"

const About = () => {
  return (
    <div id="about">
      <div className="w-full float-left pt-[130px]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="w-full float-left flex mb-[40px]">
            <div className="left w-[40%]">
              <div className="title w-full float-left mb-[40px]">
                <span className="mini block uppercase font-medium mb-[12px]">
                  - Nice to meet you!
                </span>
                <h3 className="name font-extrabold text-[40px]">Lingyun Fang</h3>
                <h3>(Amanda)</h3>
                <span className="job font-semibold text-[20px] text-dark-color">
                  <span className="cd-headline clip">
                    <span className="blc">
                      Creater &amp; Developer &amp; Designer
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <div className="right w-[60%]">
              <div className="text w-full float-left mb-[44px]">
                <p>
                  With 3 years experience as a back-end developer, I have
                  acquired the skills and knowledge necessary to make your
                  project a success. I enjoy every step of the process, from
                  discussion and collaboration.
                </p>
              </div>
              <div className="info w-full float-left">
                <ul>
                  <li className="mr-[40px] mb-[20px] inline-block">
                    <span className="block uppercase underline">Mail</span>
                    <span className="block font-inter font-bold text-dark-color">
                      <a href="mailto:amanda.ly.f@outlook.com">
                        amanda.ly.f@outlook.com
                      </a>
                    </span>
                  </li>
                  <li className="mr-[40px] mb-[20px] inline-block">
                    <span className="block uppercase underline">Phone</span>
                    <span className="block font-inter font-bold text-dark-color">
                      <a href="tel:+61 4785 84362">+61478584362</a>
                    </span>
                  </li>
                  <li className="mr-[40px] mb-[20px] inline-block">
                    <span className="block uppercase underline">Based</span>
                    <span className="block font-inter font-bold text-dark-color">
                      Sydney
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full float-left mb-[90px]">
            <ul className="ml-[-30px]">
              <li className="mb-[30px] float-left w-1/2 pl-[30px]">
                <div className="list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-purple-300">
                  <h3 className="text-[40px] mb-[7px]">3+</h3>
                  <span className="font-medium font-karla uppercase">
                    Years of Experience
                  </span>
                </div>
              </li>
              <li className="mb-[30px] float-left w-1/2 pl-[30px]">
                <div className="list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[#FFF5F6]">
                  <h3 className="text-[40px] mb-[7px]">10+</h3>
                  <span className="font-medium font-karla uppercase">
                    Projects Completed
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full float-left bg-purple-200 pt-[100px] pb-[70px] px-0">
          <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
            <div className=" w-full float-left">
              <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                - Experience
              </span>
              <h3 className="text-[40px] font-extrabold">Everything about me!</h3>
            </div>
            <div className="list w-full float-left mt-[40px]">
              <ul className="ml-[-30px] flex flex-wrap">
                {/* <!-- EDUCATION --> */}
                <li className="mb-[40px] pl-[30px] float-left ">
                  <div className=" w-full float-left">
                    <h3 className="text-[30px] font-bold mb-2">- Education</h3>
                  </div>

                  <div className="list_inner w-full float-left clear-bot  bg-white rounded-[4px] px-[70px] py-[45px] relative">
                    {/* <!-- EDUCATION 1 --> */}
                    <div className="short w-full float-left flex justify-between mb-[16px]">
                      <div className="job">
                        <span className="text-yellow-color font-medium inline-block mb-[4px]">
                          -Sept 2015 - June 2019
                        </span>
                        <h3 className="text-[20px]">
                          Bachelor of Computer Science (Software Engineering)
                        </h3>
                      </div>
                      <div className="place">
                        <span className="font-medium font-inter">
                          YiChun University
                        </span>
                      </div>
                    </div>
                    <a className="absolute inset-0 z-[5]" href="#"></a>

                    <div className="hidden_details">
                      <div className="descriptions">
                        <p>Main Unit: </p>
                        <p>
                          Thesis: Design and Implementation of a Hotel
                          management system based on SSM, grade: 79.1/100
                        </p>
                      </div>
                    </div>
                    {/* <!-- EDUCATION 2 --> */}
                    <hr></hr>
                    <div className="short w-full float-left flex justify-between mb-[16px]">
                      <div className="job">
                        <span className="text-yellow-color font-medium inline-block mb-[4px]">
                          -July 2022 - Dec 2023
                        </span>
                        <h3 className="text-[20px]">Master of Data Science</h3>
                      </div>
                      <div className="place">
                        <span className="font-medium font-inter">
                          University of Sydney
                        </span>
                      </div>
                    </div>
                    <a className="absolute inset-0 z-[5]" href="#"></a>

                    <div className="hidden_details">
                      <div className="descriptions">
                        <p>
                          Unit: Cloud Computing, Natural Language Processing,
                          Computational Statistical Methods etc.
                        </p>
                        <p>
                          Capstone: Design and Implementation of a Hotel
                          management system based on SSM, grade: 79.1/100
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="mb-[40px] pl-[30px] float-left ">
                  <div className=" w-full float-left">
                    <h3 className="text-[30px] font-bold mb-2">
                      - Working Experience
                    </h3>
                  </div>
                  <img
                    className="popup_image"
                    src="assets/img/experience/1.jpg"
                    alt=""
                  />
                  <div className="list_inner w-full float-left clear-bot  bg-white rounded-[4px] px-[70px] py-[45px] relative">
                    <div className="short w-full float-left flex justify-between mb-[16px]">
                      <div className="job">
                        <span className="text-yellow-color font-medium inline-block mb-[4px]">
                          -July 2019 - April 2021
                        </span>
                        <h3 className="text-[20px]">
                          Trainee (Part-time, August 2018 - June 2019) ➜
                          Intermediate Software Engineer (Full-time)
                        </h3>
                      </div>
                      <div className="place">
                        <span className="font-medium font-inter">
                          -Yuzeen Technology Co., Ltd.
                        </span>
                      </div>
                    </div>
                    <div className="text w-full float-left">
                      <p className="opacity-[0.7]">
                        At a leading IoT software company, I played a pivotal
                        role in developing and enhancing the IoT Platform's
                        Service Center and Alarm Modules as part of the IoT
                        Device Data Operation and Maintenance Cloud Platform
                        (SaaS). My contributions were instrumental in processing
                        vast quantities of device data, enabling static
                        analysis, dynamic monitoring, and comprehensive
                        reporting.
                      </p>
                    </div>
                    <a className="absolute inset-0 z-[5]" href="#"></a>

                    <div className="hidden_details">
                      <div className="descriptions">
                        <p>
                          - Engineered robust product prototypes and
                          microservices (7+) using the Spring Cloud framework
                          (including Nacos, Gateway, Hystrix), improving system
                          scalability and resilience.
                        </p>
                        <p>
                          {" "}
                          - Enhanced system performance by implementing Redis
                          for hot spot data storage, significantly reducing
                          database query I/O.
                        </p>
                        <p>
                          {" "}
                          - Achieved efficient service decoupling and data
                          distribution across modules with RocketMQ,
                          streamlining the system architecture.
                        </p>
                        <p>
                          {" "}
                          - Advanced to Team Leader of the Alarm Module within a
                          year, reflecting my leadership skills and technical
                          proficiency.
                        </p>
                        <p>
                          {" "}
                          - Led SQL optimization and code enhancement
                          initiatives, writing Stored Procedures for efficient
                          data processing and modifying the security module to
                          incorporate verification code-based login and tenant
                          authority management.
                        </p>
                        <p>
                          {" "}
                          - Oversaw project launches and updates, ensuring
                          timely delivery and high-quality standards.
                        </p>
                        <p>
                          - Managed server operations and maintenance on the
                          Aliyun Cloud platform, guaranteeing system reliability
                          and performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-[40px] pl-[30px] float-left ">
                  <img
                    className="popup_image"
                    src="assets/img/experience/2.jpg"
                    alt=""
                  />
                  <div className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
                    <div className="short w-full float-left flex justify-between mb-[16px]">
                      <div className="job">
                        <span className="text-yellow-color font-medium inline-block mb-[4px]">
                          -April 2021 - July 2022
                        </span>
                        <h3 className="text-[20px]">
                          Senior Java Software Engineer
                        </h3>
                      </div>
                      <div className="place">
                        <span className="font-medium font-inter">
                          -Zhenyun Information Technology Co., Ltd.
                        </span>
                      </div>
                    </div>
                    <div className="text w-full float-left">
                      <p className="opacity-[0.7]">
                        As a key member of the team at a supply chain software
                        company, I was primarily responsible for the Protocol
                        Drafting Module of the Supply Chain Procurement Cloud
                        Platform (PaaS). My role was crucial in developing a
                        Supply Chain Relationship Management System that
                        facilitates client connections via a PaaS model.
                      </p>
                    </div>
                    <a
                      className="elisc_tm_full_link absolute inset-0 z-[5]"
                      href="#"
                    ></a>

                    <div className="hidden_details">
                      <div className="descriptions">
                        <p>
                          - Led the division of the platform into a public
                          platform and customized business parts, each
                          consisting of 10+ microservices, utilizing the Spring
                          Cloud framework.
                        </p>
                        <p>
                          - Implemented Spring AOP proxy to manage aspect logic
                          in specific methods, enhancing code maintainability
                          and functionality.
                        </p>
                        <p>
                          - Developed scheduled tasks for automatic data
                          processing and communication with customers via email
                          and SMS, enhancing user engagement and satisfaction.
                        </p>
                        <p>
                          - Spearheaded the development of approval workflows,
                          contact creation, publication, and effectiveness
                          tracking, streamlining business processes.
                        </p>
                        <p>
                          - Conducted in-depth business process analysis,
                          successfully refactoring and optimizing complex
                          business modules for improved efficiency and
                          performance.
                        </p>
                        <p>
                          - Collaborated closely with account managers and
                          developers to evaluate requirement feasibility,
                          ensuring project alignment with business goals.
                        </p>
                        <p>
                          - Successfully completed 139 features during my
                          tenure, demonstrating my commitment to excellence and
                          project management capabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li className="mb-[40px] pl-[30px] float-left w-1/2">
									<img className="popup_image" src="assets/img/experience/3.jpg" alt="" />
									<div className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
										<div className="short w-full float-left flex justify-between mb-[16px]">
											<div className="job">
												<span className="text-yellow-color font-medium inline-block mb-[4px]">-2015 - 2016</span>
												<h3 className="text-[20px]">UX Designer</h3>
											</div>
											<div className="place">
												<span className="font-medium font-inter">-Colorlib</span>
											</div>
										</div>
										<div className="text w-full float-left">
											<p className="opacity-[0.7]">Website development is the process of building, programming, coding and maintaining websites and web applications.</p>
										</div>
										<a className="elisc_tm_full_link absolute inset-0 z-[5]" href="#"></a>

										<div className="hidden_details">
											<div className="descriptions">
												<p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
												<p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
												<p>That’s why more companies are not only reevaluating their website’s design but also partnering with Elisc, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
											</div>
										</div>

									</div>
								</li>
								<li className="mb-[40px] pl-[30px] float-left w-1/2">
									<img className="popup_image" src="assets/img/experience/4.jpg" alt="" />
									<div className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
										<div className="short w-full float-left flex justify-between mb-[16px]">
											<div className="job">
												<span className="text-yellow-color font-medium inline-block mb-[4px]">-2013 - 2015</span>
												<h3 className="text-[20px]">Freelancer</h3>
											</div>
											<div className="place">
												<span className="font-medium font-inter">-Vivaco Corp.</span>
											</div>
										</div>
										<div className="text w-full float-left">
											<p className="opacity-[0.7]">Website development is the process of building, programming, coding and maintaining websites and web applications.</p>
										</div>
										<a className="elisc_tm_full_link absolute inset-0 z-[5]" href="#"></a>

										<div className="hidden_details">
											<div className="descriptions">
												<p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
												<p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
												<p>That’s why more companies are not only reevaluating their website’s design but also partnering with Elisc, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
											</div>
										</div>

									</div>
								</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
