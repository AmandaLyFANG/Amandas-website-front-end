import React from "react";
import Navbar from "./BlogNav"
import Post3 from "./Post3";
import Post4 from "./Post4";
import { Container, Row, Col, Card} from 'react-bootstrap';
import "./BlogPage.css"

const BlogPage = () => {
    return (
        <div className="main-container" style={{backgroundColor: "white"}}>
            {/* <Navbar /> */}
            {/* <Navbar /> */}
            <Container>
			<Row className="justify-content-between">
			{/* Card on the left with a width of 10% */}
			
			{/* Elements on the right with fixed-width columns */}
			<Col xs={10}>
				<Row>
					<Col xs={4} className="fixed-width-column">
						<Post3 />
					</Col>
					<Col xs={4} className="fixed-width-column">
						<Post4 />
					</Col>
					<Col xs={4} className="fixed-width-column">
						<Post3 />
					</Col>
				</Row>
				{/* Add more rows with fixed-width columns as needed */}
			</Col>
			</Row>
		</Container>
        </div>
    );
};
 
export default BlogPage;

// const BlogPage = () => {
//     return (
//         <div className="main-container" style={{backgroundColor: "white"}}>
//             {/* <Navbar /> */}
//             {/* <Navbar /> */}
//             <Container>
// 			<Row className="justify-content-between">
// 			{/* Card on the left with a width of 10% */}
// 			<Col xs={2} className="left-column">
// 				<Card>
// 					<Card.Body>
// 						<Card.Title>Recent Posts</Card.Title>
// 						<ul className="list-unstyled">
// 							<li><a href="#">JavaScript</a></li>
// 							<li><a href="#">Data Structure</a></li>
// 							<li><a href="#">Algorithm</a></li>
// 							<li><a href="#">Computer Network</a></li>
// 						</ul>
// 					</Card.Body>
// 				</Card>
// 			</Col>
			
// 			{/* Elements on the right with fixed-width columns */}
// 			<Col xs={10}>
// 				<Row>
// 					<Col xs={4} className="fixed-width-column">
// 						<Post3 />
// 					</Col>
// 					<Col xs={4} className="fixed-width-column">
// 						<Post4 />
// 					</Col>
// 					<Col xs={4} className="fixed-width-column">
// 						<Post3 />
// 					</Col>
// 				</Row>
// 				{/* Add more rows with fixed-width columns as needed */}
// 			</Col>
// 			</Row>
// 		</Container>
//         </div>
//     );
// };