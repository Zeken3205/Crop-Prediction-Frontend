import React, { useContext, useState, useEffect } from 'react'
import "./myStyles.css"
import ProfileidContext from '../Context/ProfileidContext';
function SmartFarm() {
    const profileidcontext = useContext(ProfileidContext)
    //console.log(profileidcontext.profileid)
    const [information, setinformation] = useState({ nitrogen: "", potasium: "", phosphorous: "", tempreature: "", humidity: "", ph: "", rainfall: "" });
    const onChange = (e) => {
        setinformation({ ...information, [e.target.name]: e.target.value })
    }

    const id = profileidcontext.profileid
    const host = "http://localhost:5000"
    const [foundprofile, setfoundprofile] = useState("");
    const fetchProfile = async () => {
        try {
            const response = await fetch(`${host}/api/soilprofile/soilprofiles`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const profiles = await response.json();

            // Do something with the JSON data if needed
            const foundProfile = profiles.find(profile => profile._id === id);

            if (foundProfile) {
                // Do something with the found profile
                setfoundprofile(foundProfile);
            } else {
                console.log(`Profile with ID ${id} not found.`);
            }

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // Fetch the profile data only when the component mounts
        fetchProfile();
    }, []);

    useEffect(() => {
        if (foundprofile) {
            setinformation({
                nitrogen: foundprofile.nitrogen ? parseFloat(foundprofile.nitrogen) : "",
                potasium: foundprofile.potasium ? parseFloat(foundprofile.potasium) : "",
                phosphorous: foundprofile.phosphorous ? parseFloat(foundprofile.phosphorous) : "",
                tempreature: foundprofile.tempreature ? parseFloat(foundprofile.tempreature) : "",
                humidity: foundprofile.humidity ? parseFloat(foundprofile.humidity) : "",
                ph: foundprofile.ph ? parseFloat(foundprofile.ph) : "",
                rainfall: foundprofile.rainfall ? parseFloat(foundprofile.rainfall) : "",
            });
        }
    }, [foundprofile]);



    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ N: information.nitrogen, P: information.phosphorous, K: information.potasium, tempreature: information.tempreature, humidity: information.humidity, ph: information.ph, rainfall: information.rainfall }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            const result = json.result;
            alert(result)
            console.log(result);
        }
        else {
            alert("Something went wrong")
        }
    }

    return (
        <div className="bg-[#C1DABB] w-full h-screen flex justify-center">
            <section className="section_form">
                <form id="consultation-form" className="feed-form" >
                    <input required="" name="nitrogen" placeholder="Nitrogen" onChange={onChange} value={information.nitrogen} type="text" />
                    <input name="potasium" required="" placeholder="P" onChange={onChange} value={information.potasium} type="text" />
                    <input name="phosphorous" required="" placeholder="K" onChange={onChange} value={information.phosphorous} type="text" />
                    <input name="tempreature" required="" placeholder="Tempreature" onChange={onChange} value={information.tempreature} type="text" />
                    <input name="humidity" required="" placeholder="Humidity" onChange={onChange} value={information.humidity} type="text" />
                    <input name="ph" required="" placeholder="pH" onChange={onChange} value={information.ph} type="text" />
                    <input name="rainfall" required="" placeholder="Rainfall" onChange={onChange} value={information.rainfall} type="text" />

                    <button className="button_submit" onClick={handleLoginSubmit}>Submit</button>
                </form>
            </section>
        </div>
    )
}

export default SmartFarm
