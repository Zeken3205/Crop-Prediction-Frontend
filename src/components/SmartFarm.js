import React, { useState } from 'react'
import "./myStyles.css"
function SmartFarm() {
    const [information, setinformation] = useState({ N: "", P: "", K: "", tempreature: "", humidity: "", ph: "", rainfall: "" });
    const onChange = (e) => {
        setinformation({ ...information, [e.target.name]: e.target.value })
    }
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ N: information.N, P: information.P, K: information.K, tempreature: information.tempreature, humidity: information.humidity, ph: information.ph, rainfall: information.rainfall }),
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
                    <input required="" name="N" placeholder="N" onChange={onChange} type="text" />
                    <input name="P" required="" placeholder="P" onChange={onChange} type="text" />
                    <input name="K" required="" placeholder="K" onChange={onChange} type="text" />
                    <input name="tempreature" required="" placeholder="Tempreature" onChange={onChange} type="text" />
                    <input name="humidity" required="" placeholder="Humidity" onChange={onChange} type="text" />
                    <input name="ph" required="" placeholder="pH" onChange={onChange} type="text" />
                    <input name="rainfall" required="" placeholder="Rainfall" onChange={onChange} type="text" />
                    <button className="button_submit" onClick={handleLoginSubmit}>Submit</button>
                </form>
            </section>
        </div>
    )
}

export default SmartFarm
