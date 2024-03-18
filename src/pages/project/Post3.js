// Post3.js

import { Card } from "react-bootstrap";
import Image1 from '../../assets/img/blog/5.png';

const Post3 = () => {
	const getRandomColor = () => {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	const createImageFromInitials = (size, name, color) => {
		if (name == null) return;
		const canvas = document.createElement('canvas')
		const context = canvas.getContext('2d')
		canvas.width = canvas.height = size

		context.fillStyle = "#ffffff"
		context.fillRect(0, 0, size, size)

		context.fillStyle = `${color}50`
		context.fillRect(0, 0, size, size)

		context.fillStyle = color;
		context.textBaseline = 'middle'
		context.textAlign = 'center'
		context.font = `${size / 10}px Roboto`
		context.fillText(name, (size / 2), (size / 2))

		return canvas.toDataURL()
	};

	return (
		<div class="w-96 h-auto bg-white rounded overflow-hidden shadow-sm">
			<img class="w-full h-48 object-cover" src={Image1} alt="Card image" />
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2 text-center">Algorithm</div>
				<p class="text-gray-700 text-base">
					Algorithm
				</p>
			</div>
			<div class="px-6 pt-4 pb-2">
				<a href="#" class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-black">Read More</a>
			</div>
		</div>


		// 		<Card>
		// 			{/* <Card.Img
		// 				variant="top"
		// 				src=
		// "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png"
		// 				width={20}
		// 				height={250}
		// 			/> */}
		// 			<Card.Img
		// 				variant="top"
		// 				src={Image1}
		// 				width={20}
		// 				height={250}
		// 			/>
		// 			<Card.Body>
		// 				<Card.Title>Algorithm</Card.Title>
		// 				<Card.Text>
		// 				Algorithm
		// 					{/* The word Algorithm means “a process
		// 					or set of rules to be followed in calculations
		// 					or other problem-solving operations”. Therefore
		// 					Algorithm refers to a set of rules/instructions
		// 					that step-by-step define how a work is to be
		// 					executed upon in order to get the expected
		// 					results. */}
		// 				</Card.Text>
		// 				<a href="#" className="btn btn-primary">Read More</a>
		// 			</Card.Body>
		// 		</Card>
	)
}

export default Post3;
