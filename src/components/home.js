import React from "react";


function Home() {

  const contentStyle = {maxWidth:'2000px', marginTop:'46px'}
  const aboutStyle = {maxWidth: '1200px', backgroundColor: 'grey'}
  const descrFontSize = {fontSize: '18px'}

return(
    <div className='w3-content' style={contentStyle}>
      <div className="w3-container w3-content w3-center w3-padding-64" style={aboutStyle} id="about">
        <h2 className="w3-wide">WITH WILLOW</h2>
        <p className="w3-opacity"><i>Making a hard thing a little easier</i></p>
        <p className="w3-justify" style={descrFontSize}>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="w3-container w3-content w3-center w3-padding-64" style={{backgroundColor: '#D93240'}} id="about">
        <h2 className="w3-wide">Our Services</h2>
      </div>
      <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth: '1200px', backgroundColor: '#0F5959'}} id="about">
        <h2 className="w3-wide">Memorials</h2>
        <p className="w3-justify" style={descrFontSize}>Our memorial service allows you to remember those you have lost by creating a tribute page where
          friends and family can give condolences and donate.</p>
      </div>
    </div>
)

}

export default Home;
