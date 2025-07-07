import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container pt-5">
				<Jumbotron buttonURL="https://www.pokerstars.es/poker/pages/welcome-offers/?adp=&aid=164083061895&cid=21399624365&cr=746117247748&dv=c&gad_campaignid=21399624365&gad_source=1&gbraid=0AAAAADjJa3MT1mVkj5Bc7kIyX1z52NZwb&gclid=CjwKCAjw4K3DBhBqEiwAYtG_9Janub2Owe2auoQHCiNGGB4z_NzuuVsD0cFSmLzU5y4ttHKDTqR6YhoC5QIQAvD_BwE&kwd=pokerstars&kwid=kwd-31279471&mt=e&no_redirect=1&review=true&utm_medium=optimizely&utm_content=4546826284564480"/>
				<div className="row">
					<Card 
					name="Texas Hold´em"
					imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS441nxsKM_kjA-t4GggcArt8sCDp-BL20V-Q&s"
					description="El mas popular. Cada jugador recibe dos cartas privadas y hay 5 comunitarias."
					button="Comenzar"
					buttonURL="https://www.pokerstars.es/poker/pages/welcome-offers/?adp=&aid=164083061895&cid=21399624365&cr=746117247748&dv=c&gad_campaignid=21399624365&gad_source=1&gbraid=0AAAAADjJa3MT1mVkj5Bc7kIyX1z52NZwb&gclid=CjwKCAjw4K3DBhBqEiwAYtG_9Janub2Owe2auoQHCiNGGB4z_NzuuVsD0cFSmLzU5y4ttHKDTqR6YhoC5QIQAvD_BwE&kwd=pokerstars&kwid=kwd-31279471&mt=e&no_redirect=1&review=true&utm_medium=optimizely&utm_content=4546826284564480"/>
					<Card 
					name="Omaha"
					imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSweNBEk8rUwvL3PLT25iQCxMwuY_JQ9XdH-w&s"
					description="Similar al Texas Hold´em, pero cada jugador recibe 4 cartas privadas y debe usar exactamente 2"
					button="Comenzar"
					buttonURL="https://www.pokerstars.es/poker/pages/welcome-offers/?adp=&aid=164083061895&cid=21399624365&cr=746117247748&dv=c&gad_campaignid=21399624365&gad_source=1&gbraid=0AAAAADjJa3MT1mVkj5Bc7kIyX1z52NZwb&gclid=CjwKCAjw4K3DBhBqEiwAYtG_9Janub2Owe2auoQHCiNGGB4z_NzuuVsD0cFSmLzU5y4ttHKDTqR6YhoC5QIQAvD_BwE&kwd=pokerstars&kwid=kwd-31279471&mt=e&no_redirect=1&review=true&utm_medium=optimizely&utm_content=4546826284564480"/>
					<Card 
					name="Card Stud"
					imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wcicWTfCsdIe8O87IWJfwCz8w-_T1Vbhag&s"
					description="No hay cartas comunitarias. Cada jugador recibe 7 cartas y y forma la mejor mano de 5"
					button="Comenzar"
					buttonURL="https://www.pokerstars.es/poker/pages/welcome-offers/?adp=&aid=164083061895&cid=21399624365&cr=746117247748&dv=c&gad_campaignid=21399624365&gad_source=1&gbraid=0AAAAADjJa3MT1mVkj5Bc7kIyX1z52NZwb&gclid=CjwKCAjw4K3DBhBqEiwAYtG_9Janub2Owe2auoQHCiNGGB4z_NzuuVsD0cFSmLzU5y4ttHKDTqR6YhoC5QIQAvD_BwE&kwd=pokerstars&kwid=kwd-31279471&mt=e&no_redirect=1&review=true&utm_medium=optimizely&utm_content=4546826284564480"/>
					<Card 
					name="Card Draw"
					imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTap1Vn42Xb9EiyMGc0lMxnzByuvYGg50cF_g&s"
					description="Cada jugador recibe 5 cartas y puede cambiar algunas tras la primera ronda de apuestas"
					button="Comenzar"
					buttonURL="https://www.pokerstars.es/poker/pages/welcome-offers/?adp=&aid=164083061895&cid=21399624365&cr=746117247748&dv=c&gad_campaignid=21399624365&gad_source=1&gbraid=0AAAAADjJa3MT1mVkj5Bc7kIyX1z52NZwb&gclid=CjwKCAjw4K3DBhBqEiwAYtG_9Janub2Owe2auoQHCiNGGB4z_NzuuVsD0cFSmLzU5y4ttHKDTqR6YhoC5QIQAvD_BwE&kwd=pokerstars&kwid=kwd-31279471&mt=e&no_redirect=1&review=true&utm_medium=optimizely&utm_content=4546826284564480"/>
				</div>
			</div>
		</div>
	);
};

export default Home;