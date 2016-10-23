import React from "react";


function Home() {

  const contentStyle = {maxWidth:'2000px', marginTop:'46px'}
  const aboutStyle = {maxWidth: '800px', backgroundColor: 'grey'}

return(
    <div className='w3-content' style={contentStyle}>
      <div className="w3-container w3-content w3-center w3-padding-64" style={aboutStyle} id="about">
        <h2 className="w3-wide">WITH WILLOW</h2>
        <p className="w3-opacity"><i>We love music</i></p>
        <p className="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
)

}

export default Home;
