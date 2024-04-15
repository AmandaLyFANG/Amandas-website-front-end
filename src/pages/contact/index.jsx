import React from "react";

const Contact = () => {
	return (
		<div className="elisc_tm_section" id="contact">
			<div className="elisc_tm_contact w-full min-h-[100vh] float-left pt-[120px]">
				<div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
					<div className="wrapper w-full float-left flex">
						<div className="left w-1/2 pr-[50px]">
							<div className="elisc_tm_title w-full float-left">
								<span className="w-full float-left font-medium uppercase inline-block mb-[12px]">- Let's Connect</span>
								<h3 className="text-[40px] font-extrabold">Get in touch</h3>
							</div>
							<div className="text w-full float-left mt-[20px] mb-[40px]">
								<p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>
							</div>
							<div className="info w-full float-left">
								<ul className="relative">
									<li className="pl-[15px]"><span className="text-[#130F49] font-semibold text-[18px]" >+61 478584362</span></li>
									<li className="pl-[15px]"><span className="text-[#130F49] font-semibold text-[18px]" >amanda.ly.f@outlook.com</span></li>
									<li className="pl-[15px]"><span className="text-[#130F49] font-semibold text-[18px]" >Ultimo, Sydney, NSW 2007</span></li>
								</ul>
							</div>
						</div>
						{/* <div className="right w-1/2 pl-[50px]">
							<div className="fields w-full float-left h-auto clear-both">
								<form action="/" method="post" className="contact_form" id="contact_form">
									<div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
									<div className="empty_notice"><span>Please Fill Required Fields</span></div>
									<div className="first w-full float-left">
										<ul>
											<li className="w-full mb-[25px] float-left">
												<input id="name" type="text" placeholder="Enter your name" autocomplete="off" />
											</li>
											<li className="w-full mb-[25px] float-left">
												<input id="email" type="text" placeholder="Your email" autocomplete="off" />
											</li>
										</ul>
									</div>
									<div className="last">
										<textarea id="message" placeholder="Write something..."></textarea>
									</div>
									<div className="elisc_tm_button">
										<a id="send_message" href="#">Submit now</a>
									</div>


								</form>
							</div>
						</div> */}
					</div>



				</div>
			</div>
		</div>
	);
};

export default Contact;
