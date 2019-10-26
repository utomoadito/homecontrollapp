import React, { useState } from 'react';

const UtomoAdhitya = () => {
	const [profile, setProfile] = useState({
		name: "Adhitya Utomo",
		github: "https://github.com/utomoadito",
		facebook: "https://www.facebook.com/adhitya.putrautomo"
	});

// const clickButton = () => {
// 	isOn === "Off" ? setIsOn("On") : setIsOn("Off")
// 	}
	
	return (
			<div>
				<h2>Hello Geessss, this is my profile</h2>
				<h5>{profile.name}</h5>
				<h5>{profile.github}</h5>
				<h5>{profile.facebook}</h5>
			</div>
		);
}

export default UtomoAdhitya;