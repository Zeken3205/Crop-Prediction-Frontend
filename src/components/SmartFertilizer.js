import React, { useState } from 'react'
import "./myStyles.css"
const SmartFertilizer = () => {
    const [informationfert, setinformationfert] = useState({ N: "", P: "", K: "", tempreature: "", humidity: "", moisture: "", soiltype: "", croptype: "" });
    const onChange = (e) => {
        setinformationfert({ ...informationfert, [e.target.name]: e.target.value })
    }
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:5000/fertilizer_predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ N: informationfert.N, P: informationfert.P, K: informationfert.K, tempreature: informationfert.tempreature, humidity: informationfert.humidity, moisture: informationfert.moisture, soiltype: informationfert.soiltype, croptype: informationfert.croptype }),
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
                    <input name="moisture" required="" placeholder="Moisture" onChange={onChange} type="text" />
                    <input name="soiltype" required="" placeholder="Soil Type" onChange={onChange} type="text" />
                    <input name="croptype" required="" placeholder="Crop Type" onChange={onChange} type="text" />
                    <button className="button_submit" onClick={handleLoginSubmit}>Submit</button>
                </form>
            </section>
        </div>
    )
}

export default SmartFertilizer
