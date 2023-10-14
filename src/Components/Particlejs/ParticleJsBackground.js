import Particles from "react-tsparticles";
const ParticleBackground = () =>{
    return(
        <div>
            <Particles 
            options={{
                background:{
                    color:"#0e387a",
                },
                fpsLimit:60,
                interactiity:{
                    dectectsOn:"canvas",
                    events:{
                        resize:true
                    },
                },
                particles:{
                    color:{
                        value:"#9fafca"
                    },
                    number:{
                        density:{
                            enable:true,
                            area:1080
                        },
                        limit:0,
                        value:400,
                    },
                    opacity:{
                        animation:{
                            enable:true,
                            minimumValue:0.05,
                            speed:1,
                            sync:false
                        },
                        random:{
                            enable:true,
                            minimumValue:0.05
                        },
                        value:1
                    },
                    shape:{
                        type:"circle",
                    },
                    size:{
                        random:{
                            enable:true,
                            minimumValue:0.5,
                        },
                        value:1,
                    },

                },

            }}
                />
        </div>
    );

}
export default ParticleBackground;
// import React from 'react';
// import Particles from 'react-tsparticles';

// const CircularParticles = () => {
//   const particleParams = {
//     particles: {
//       number: {
//         value: 50,
//       },
//       size: {
//         value: 3,
//       },
//       shape: {
//         type: 'circle',
//       },
//       move: {
//         enable: true,
//         speed: 1,
//       },
//     },
//     interactivity: {
//       events: {
//         onhover: {
//           enable: true,
//           mode: 'repulse',
//         },
//       },
//     },
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       options={particleParams}
//       style={{
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//         top: 0,
//         left: 0,
//       }}
//     />
//   );
// };

// export default CircularParticles;
