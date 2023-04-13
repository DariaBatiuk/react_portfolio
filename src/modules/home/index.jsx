import React from "react";
import './style.scss';
import {useNavigate} from 'react-router-dom';
import {Animate} from 'react-simple-animate';

const Home=()=>{

	const navigate = useNavigate();
	console.log(navigate)
	const handleNavigateToContactPage = () =>{
		navigate('/contact')
	}

	return(
		<section id="home" className="home">
			<div className="home__text_wrapper">
				<h1>
					Hello, I'm Daria Batiuk <br /> Front End Developer
				</h1>
			</div>
			<Animate 
				play 
				duration={1.5} 
				delay={0} 
				start={{
					transform : 'translateY(550px)' 
				}}
				end={{
					transform : 'translatex(0px)' 
				}}
			>
			<div className="home__contact">
		<button onClick={handleNavigateToContactPage}>Contact Me</button>
			</div>
			</Animate>
		</section>
	)
}

export default Home;