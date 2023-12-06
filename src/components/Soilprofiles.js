import React, { useContext, useEffect, useRef, useState } from 'react'
import ProfileContext from '../Context/ProfileContext'
import Profileitem from './Profileitem'
import { useNavigate } from 'react-router-dom';

function Soilprofiles() {
    const context = useContext(ProfileContext);
    const { profiles, getProfiles } = context;

    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getProfiles()
        }
        else {
            navigate('/')
        }
        // eslint-disable-next-line
    }, [])

    const handleProfileClick = (profileId) => {
        console.log("Profile ID clicked:", profileId);
        // Implement what should happen when a profile is clicked
        // For example, navigate to a detail page or send the ID to an API
    };

    return (
        <div className='flex mx-9 my-3'>
            {profiles.map((profile) => {
                return (
                    <div className="mx-3" key={profile._id}>
                        <Profileitem profile={profile} onProfileClick={handleProfileClick} />
                    </div>
                )
            })}
        </div>
    )
}



export default Soilprofiles
