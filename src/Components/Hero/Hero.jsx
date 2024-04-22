import React from 'react';
import background from '../../images/BGs/1.jpg';
import panArabLogo from '../../images/Conference-Title.png'
import Counter from '../Counter/Counter';
const Hero = () => {
    const containerStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: '100% 100%', // Adjust to cover full width and height
        backgroundRepeat: 'no-repeat',
        width: '100%', // Use vw unit for viewport width
        height: '600px', // Adjust height as needed

    };

    // const panArabStyle = {
    //     backgroundImage: `url(${panArabLogo})`,
    //     backgroundSize: '50%', // Adjust to cover full width and height
    //     backgroundRepeat: 'no-repeat',
    //     width: '100vw', // Use vw unit for viewport width
    //     height: '100vh', // Adjust height as needed
    // };
    return (<>
        <div style={containerStyle} className='container-fluid '>
            <div className="row">
                <div className="col-1">
                    {/* <div className="d-flex align-items-center justify-content-center"> */}
                    {/* <div style={panArabStyle}></div> */}
                    {/* </div> */}
                </div>
                <div className="col-5 mt-5 pt-4 w-50">
                    <img src={panArabLogo} className='img-fluid mt-5 pt-5' alt='PanArab Logo' />
                    <div className="d-flex justify-content-between">
                        <h4 className='text-light mt-3 '>24-26 January 2025</h4>
                        <h4 className='text-light mt-3 '>Ritz-Carlton (DIFC) Dubai, UAE</h4>
                    </div>

                    <div className='mt-3'>
                        <Counter />
                    </div>

                </div>
            </div>
        </div>
    </>
    );
};

export default Hero;
