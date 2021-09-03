import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { useTracker } from "meteor/react-meteor-data";
import ReactPlayer from 'react-player'
import React, { useState } from "react";
import "./HomeForm.css";
import "./Home2Form.scss";
import { Link } from "react-router-dom";

export const HomeForm = () => {    
    const user = useTracker(() => Meteor.user());
    const navUserForm = () => {
        window.location.assign('/user-page');
    };
    // NAV FUNCTIONS
    const navCivilRights = () => {
        window.location.assign('/Civil-Rights')
    }
	const navCivilWar = () => {
		window.location.assign('/CivilWar');
	}
    const navOOST = () => {
		window.location.assign('/OOST');
	}
    const navPostCivilRights = () => {
		window.location.assign('/Post-Civil-Rights');
	}
    const navPresent = () => {
		window.location.assign('/Present');
	}
    const navReconstruction = () => {
		window.location.assign('/Reconstruction');
	}
    const navRiseOfKKK = () => {
		window.location.assign('/Rise-Of-KKK');
	}
    const navWW2 = () => {
		window.location.assign('/WW2');
	}

    /* code referenced for html: https://codepen.io/paulhbarker/pen/apvGdv/ */
    return(
        <div>
            <section id="timeline">
	<h1>Learning Through Time</h1>
	<p class="leader">Select a <b>Key Time Period</b> to start learning!</p>
	<div class="demo-card-wrapper">
		<div class="demo-card demo-card--step1" onClick={navOOST}>
			<div class="head">
				<div class="number-box">
					<span>1619</span>
				</div>
				<h2><span class="small">Key Time Period:</span> Origination of Slave Trade</h2>
			</div>
			<div class="body">
				<p>Exploring the events occuring from when the first slaves were recorded to have set foot on U.S. soil to the rise of the domestic slave trade, and how these sequences of events led to the American Civil War.</p>
				<img src="/images/origination_of_slave_trade.jpg" alt="Graphic"></img>
			</div>
		</div>

		<div class="demo-card demo-card--step2" onClick={navCivilWar} >
			
			<div class="head">
				<div class="number-box">
					<span>1861</span>
				</div>
				<h2><span class="small">Key Time Period:</span> Civil War</h2>
			</div>
			<div class="body">
				<p>Examining key occurrences during the American Civil War relating to the African-American community as well as highlighting Black figures who were influential during this time.</p>
				<img src="/images/civil_war.jpg" alt="Graphic"></img>
			</div>
			
		</div>

		<div class="demo-card demo-card--step3" onClick={navReconstruction}>
			<div class="head">
				<div class="number-box">
					<span>1865</span>
				</div>
				<h2><span class="small">Key Time Period:</span> Reconstruction</h2>
			</div>
			<div class="body">
				<p>The period after the American Civil War where the U.S. grappled with the reforms and challenges arising from reintegrating the Union with the states that seceded. Learners will inspect several legal policies that affected the experiences of African-Americans.</p>
				<img src="/images/reconstruction_era.jpg" alt="Graphic"></img>
			</div>
		</div>

		<div class="demo-card demo-card--step4" onClick={navRiseOfKKK}>
			<div class="head">
				<div class="number-box">
					<span>1915</span>
				</div>
				<h2><span class="small">Key Time Period:</span> Rise of the Ku Klux Klan</h2>
			</div>
			<div class="body">
				<p>The Birth of a Nation (1915) film contributed to the revival of the Ku Klux Klan; This segment will explore the effects of this film on the socio-political landscape of the United States.</p>
				<img src="/images/birth_of_a_nation.jpeg" alt="Graphic"></img>
			</div>
		</div>

		<div class="demo-card demo-card--step5" onClick={navWW2}>
			<div class="head">
				<div class="number-box">
					<span>1941</span>
				</div>
				<h2><span class="small">Key Time Period:</span> World War II</h2>
			</div>
			<div class="body">
				<p>Investigating the lives of African-Americans during the second World War, including their involvement as soldiers and the lives and experiences of communities on the U.S. homefront.</p>
				<img src="/images/ww2.jpg" alt="Graphic"></img>
			</div>
		</div>

        <div class="demo-card demo-card--step6" onClick={navCivilRights}>
			<div class="head">
				<div class="number-box">
					<span>1955</span>
				</div>
				<h2><span class="small">Key Time Period:</span> Civil Rights</h2>
			</div>
			<div class="body">
				<p>Highlighting influential and underappreciated Black figures, pieces of legislation, and events during this monumental era for the rights of African-Americans. This segment will also compare and contrast the differences between the Northern and Southern experiences of Black Americans during this time period.</p>
				<img src="/images/civil_rights.jpg" alt="Graphic"></img>
			</div>
		</div>

        <div class="demo-card demo-card--step7" onClick={navPostCivilRights}>
			<div class="head">
				<div class="number-box">
					<span>1965</span>
				</div>
				<h2><span class="small">Key Time Period:</span> Post Civil Rights</h2>
			</div>
			<div class="body">
				<p>This era will navigate how the lives of African-Americans changed after the Civil Rights movement and te new problems that the Black community faced.</p>
				<img src="/images/post_civil_rights.jpg" alt="Graphic"></img>
			</div>
		</div>

        <div class="demo-card demo-card--step8" onClick={navPresent}>
			<div class="head">
				<div class="number-box">
					<span>2021</span>
				</div>
				<h2><span class="small">Key Time Period:</span>Present Day</h2>
			</div>
			<div class="body">
				<p>This unit focuses on the cultural movements and pieces of legislation that influence Black people today. During this period, learners will delve into the state of the African-American experience in the modern day and where things are headed for this community.</p>
				<img src="/images/modern_era.jpg" alt="Graphic"></img>
			</div>
		</div>
    
	</div>
</section>
        </div>
        
        
    );
};