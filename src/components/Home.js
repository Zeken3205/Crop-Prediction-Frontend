import React, { useContext } from 'react'
import './myStyles.css'
import { useNavigate } from 'react-router-dom';
import Farminganimation from './Farminganimation'
import Fruitbasketanimation from './fruitbasketanimation'
import Logincontext from '../Context/Logincontext';
function Home() {
    let navigate = useNavigate();
    const logincontext = useContext(Logincontext)
    const handleSmartFarm = () => {
        if (logincontext.logincheck)
            navigate('/smartfarm')
        else
            navigate('/login')
    }
    const handleFertilizerPredict = () => {
        if (logincontext.logincheck)
            navigate('/fertilizer_predict')
        else
            navigate('/login')
    }
    return (
        <div>
            <div className="green-stripe-container py-56 pl-7 flex justify-between">
                <div className='flex flex-col w-1/2'>
                    <h1 className='text-4xl block'>Lorem</h1>
                    <p className='block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat suscipit harum nisi odio facilis eos sequi ut rerum possimus, atque eius ad reiciendis ipsum a? Nisi animi aspernatur nobis consequatur. </p>
                </div>
                <div className="farming-animation-wrapper flex w-1/2">
                    <Farminganimation />
                </div>
            </div>

            <div className="white-stripe-container flex justify-between">
                <div className="fruitbasketanimation-wrapper">
                    <Fruitbasketanimation />
                </div>
                <div className="flex flex-col w-1/2 pr-9 justify-end">
                    <h1 className="text-4xl block">Lorem</h1>
                    <p className="block">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                        suscipit harum nisi odio facilis eos sequi ut rerum possimus, atque
                        eius ad reiciendis ipsum a? Nisi animi aspernatur nobis consequatur.
                    </p>
                </div>
            </div>

            <div className="pepermint-stripe-container py-48 flex flex-col justify-center items-center ">
                <div className="flex flex-col w-1/2 pr-9 text-center">
                    <h1 className="text-4xl block">Lorem</h1>
                    <p className="block">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div>
                    <div className='py-10 flex justify-center '>
                        <div className="card flex mx-6" onClick={handleSmartFarm}>
                            <img src="https://img.freepik.com/free-vector/isometric-smart-farm-flowchart_1284-59308.jpg?w=740&t=st=1698414936~exp=1698415536~hmac=d9518ad01b017bd9c43794c7b7bf53104b568ea4ee720d8f70131cdf8958ea4a" alt="" />
                            <div className="card__content">
                                <p className="card__title">Card Title</p>
                                <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </div>
                        </div>

                        <div className="card flex mx-6" onClick={handleFertilizerPredict}>
                            <img src="https://static.vecteezy.com/system/resources/previews/002/228/405/non_2x/the-weather-forecaster-is-forecasting-the-weather-hand-drawn-style-design-illustrations-vector.jpg" alt="" />
                            <div className="card__content">
                                <p className="card__title">Card Title</p>
                                <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </div>
                        </div>

                        <div className="card flex mx-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                            <div className="card__content">
                                <p className="card__title">Card Title</p>
                                <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="orange-stripe-container py-52"></div>
            <div className="white-stripe-container py-52"></div>
            <div className="android-green-stripe-container py-52"></div>
            <div className="white-stripe-container py-52"></div>
        </div>
    )
}

export default Home
