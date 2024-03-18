import React from "react";

const Contact = () => {
	return (
		<div class="elisc_tm_section" id="contact">
			<div class="elisc_tm_contact w-full min-h-[100vh] float-left pt-[120px]">
				<div class="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
					<div class="wrapper w-full float-left flex">
						<div class="left w-1/2 pr-[50px]">
							<div class="elisc_tm_title w-full float-left">
								<span class="w-full float-left font-medium uppercase inline-block mb-[12px]">- Let's Connect</span>
								<h3 class="text-[40px] font-extrabold">Get in touch</h3>
							</div>
							<div class="text w-full float-left mt-[20px] mb-[40px]">
								<p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>
							</div>
							<div class="info w-full float-left">
								<ul class="relative">
									<li class="pl-[15px]"><span class="text-[#130F49] font-semibold text-[18px]" >+61 478584362</span></li>
									<li class="pl-[15px]"><span class="text-[#130F49] font-semibold text-[18px]" >amanda.ly.f@outlook.com</span></li>
									<li class="pl-[15px]"><span class="text-[#130F49] font-semibold text-[18px]" >Ultimo, Sydney, NSW 2007</span></li>
								</ul>
							</div>
						</div>
						{/* <div class="right w-1/2 pl-[50px]">
							<div class="fields w-full float-left h-auto clear-both">
								<form action="/" method="post" class="contact_form" id="contact_form">
									<div class="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
									<div class="empty_notice"><span>Please Fill Required Fields</span></div>
									<div class="first w-full float-left">
										<ul>
											<li class="w-full mb-[25px] float-left">
												<input id="name" type="text" placeholder="Enter your name" autocomplete="off" />
											</li>
											<li class="w-full mb-[25px] float-left">
												<input id="email" type="text" placeholder="Your email" autocomplete="off" />
											</li>
										</ul>
									</div>
									<div class="last">
										<textarea id="message" placeholder="Write something..."></textarea>
									</div>
									<div class="elisc_tm_button">
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
