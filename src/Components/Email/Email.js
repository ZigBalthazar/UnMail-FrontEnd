import React, { useState, useContext, useMemo } from 'react'
import './Email.css'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import swal from 'sweetalert';
import AllValue from '../../Context/AllValue';
import Input from '../Input';
export default function Email() {
    const [darkMode, setDarkMode] = useState(false)
    const ContextValue = useContext(AllValue)
    const [sendClickStatus, setSendClickStatus] = useState(false)
    const [SubmitClick,setSubmitClick]=useState(false)
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        
    };
    const toggleClickHandler = () => {
        document.body.classList.toggle('dark')
        setDarkMode(prev => !prev)
    }


    const SendClickHandler = () => {
        setSendClickStatus(true)

        setTimeout(() => {
            setSubmitClick(false)  
        }, 1000);
        setSubmitClick(true)

        if (ContextValue.inputsValidTrue && ContextValue.SubjectValue && ContextValue.TextValue && ContextValue.EmailValue) {
            swal({
                title: "Email Was Sent",

                icon: "success",
                dangerMode: true,
            })

        

 
          


            fetch(`https://keyhangard.ir/mail?to=${ContextValue.EmailValue}&text=${ContextValue.TextValue}&subject=${ContextValue.SubjectValue}`, {
                method: 'POST'
            }).then(res => console.log(res))

        } else {
            swal({
                title: " Your Anonymous Email Wasnt Send",
                text:'Or Report Bug',
                icon: "error",
                dangerMode: true,
            })
        }

    }
    return (
        <>
            {

                useMemo(() =>
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {

                                color: {
                                    value: "#fff",
                                },
                            },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: false,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: '#ff0000',
                                },
                                links: {
                                    color: '#ff0000',
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 2,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    >

                    </Particles>
                    , [])

            }
            <main>
                <nav>
                    <div className='d-flex align-items-center'>
                        <img src='images/New Project (2).png' alt="" />
                        <a href='https://t.me/REPORT_BUGS' className='mx-2'>report bugs</a>
                    </div>


                    <div>
                        <input type='checkbox' onClick={toggleClickHandler} id='timeOffcanvas' />
                        <label for='timeOffcanvas' class="toggle_btn ">Night</label>
                    </div>
                </nav>


                <section>
                    <Input sendClickStatus={sendClickStatus} SubmitClick={SubmitClick} name='Email' placeholder='To...' />
                    <Input sendClickStatus={sendClickStatus} SubmitClick={SubmitClick} name='Subject' placeholder='Subject...' />
                    <Input sendClickStatus={sendClickStatus} SubmitClick={SubmitClick} name='Text' placeholder='Text...' />

                </section>

                <button onClick={SendClickHandler}>Send</button>

                <a href="https://t.me/keyhangard"><img width='50' height='50' className='keyhan-logo' src={!darkMode ? 'images/kg-logo-transw.png' : 'images/kg-logo-transparent (1).png'} alt="keyhanLogo" /></a>
            </main>
        </>
    )
}

