import React, { useContext } from 'react';
import ProfileContext from '../Context/ProfileContext';
import "../css files/profilecard.css"
const Profileitem = ({ profile, onProfileClick }) => {
    if (!profile) {
        // Optionally handle the scenario where profile is not available
        console.log("Profile data not available")
    }

    const handleClick = () => {
        onProfileClick(profile._id); // Call the passed function with the profile's _id
    }

    //const context = useContext(ProfileContext);
    return (
        <div className="card" onClick={handleClick}>
            <a className="card1" >
                <p>{profile.name}</p>
                <p className="small">Card description with lots of great facts and interesting details.</p>
                <div className="go-corner">
                    <div className="go-arrow">
                        →
                    </div>
                </div>
            </a>
        </div>
    )
};

export default Profileitem