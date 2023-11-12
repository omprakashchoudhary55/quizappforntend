import React from 'react'

const QuestionSection = ({ current,setCurrent }) => {
  return (
    <>
     <div
      style={{
        width: "100vw",
        height: "92vh",
        backgroundColor: "#fff",
        padding: "10px 20px",
        display: current === 2 ? "block" : "none",
        position: "absolute",
        top: "8vh",
        zIndex:5,
      }}
    >
  
  <div className="main-div" style={{ width: "100%", height: "auto", backgroundColor: "#fff"}}>

    <div className="heading" style={{width: "90%", padding: "12px 0  0 12px",  textAlign: "center"}}>
      <h3 style={{color: "brown", fontWeight:"bold", lineHeight: "2rem"}}>Read here RSCIT Important Questions part 1</h3>
    </div>
    <div className="questions" style={{paddingTop: "3rem", marginLeft: "2rem"}}>
      <h2>Q1. What is the full form of RAM</h2>
      <ul className="questions-options" style={{listStyle: "none",
        margin: "1.5rem 0"}}>
        <li className="option" style={{ width: "80%",
          color: "#000",
          backgroundColor: "#fff",
          boxShadow: "0.8px 0.78px 0px 0.34px rgba(246, 247, 246, 0.904), " +
          "0.8px -0.78px 0px 0.34px rgba(13, 104, 240, 0.253), " +
          "-0.8px 0.78px 0px 0.34px rgba(13, 104, 240, 0.253)",
          padding: "1rem 1.5rem",
          marginBottom: "1rem",
          borderRadius: "10px",
          border: "2px solid transparent"}}><input type="radio" style={{marginRight: "12px"}}/>A. option 1</li>
        <li className="option" style={{ width: "80%",
        color: "#000",
        backgroundColor: "#fff",
        boxShadow: "0.8px 0.78px 0px 0.34px rgba(246, 247, 246, 0.904), " +
        "0.8px -0.78px 0px 0.34px rgba(13, 104, 240, 0.253), " +
        "-0.8px 0.78px 0px 0.34px rgba(13, 104, 240, 0.253)",
        padding: "1rem 1.5rem",
        marginBottom: "1rem",
        borderRadius: "10px",
        border: "2px solid transparent"}}><input type="radio" style={{marginRight: "12px"}}/>B. option 2</li>
        <li className="option" style={{ width: "80%",
        color: "#000",
        backgroundColor: "#fff",
        boxShadow: "0.8px 0.78px 0px 0.34px rgba(246, 247, 246, 0.904), " +
        "0.8px -0.78px 0px 0.34px rgba(13, 104, 240, 0.253), " +
        "-0.8px 0.78px 0px 0.34px rgba(13, 104, 240, 0.253)",
        padding: "1rem 1.5rem",
        marginBottom: "1rem",
        borderRadius: "10px",
        border: "2px solid transparent"}}><input type="radio" style={{marginRight: "12px"}}/>C. option 3</li>
        <li className="option" style={{ width: "80%",
        color: "#000",
        backgroundColor: "#fff",
        boxShadow: "0.8px 0.78px 0px 0.34px rgba(246, 247, 246, 0.904), " +
        "0.8px -0.78px 0px 0.34px rgba(13, 104, 240, 0.253), " +
        "-0.8px 0.78px 0px 0.34px rgba(13, 104, 240, 0.253)",
        padding: "1rem 1.5rem",
        marginBottom: "1rem",
        borderRadius: "10px",
        border: "2px solid transparent"}}><input type="radio" style={{marginRight: "12px"}}/>D. option 4</li>
      </ul>

      <div className="answer" style={{width: "80%", height: "40px", backgroundColor: "rgb(231, 233, 233)", borderRadius: "10px", 
      display: "flex", alignItems: "center", cursor: "pointer"}}>
<i className="fa-solid fa-plus" style={{paddingLeft: "1.7rem"}}></i>
        <span style={{paddingLeft: ".7rem"}}>A</span>

      </div>
      <div className="btn" style={{width: "80%", display: "flex", alignItems: "center", marginTop: "1rem"}}>
        <button style= {{padding: ".6rem 1.8rem ", fontSize: "1rem", backgroundColor:  "#351f97d8", color: "white",
        border: "2px solid transparent", borderRadius: "10px",  transition: "0.5s all"}}>Previous</button>
        <button style= {{padding: ".6rem 1.8rem", fontSize: "1rem", backgroundColor:  "#351f97d8", color: "white",
         border: "2px solid transparent", borderRadius: "10px", marginLeft: "auto",  transition: "0.5s all"}}>Next</button>
      </div>
    
    </div>


    
    <div className="questions" style={{paddingTop: "3rem", marginLeft: "2rem"}}>
    <h2>Q1. What is the full form of RAM</h2>
    <ul className="questions-options" style={{listStyle: "none",
      margin: "1.5rem 0"}}>
      <li className="option" style={{ width: "80%",
        color: "#000",
        backgroundColor: "#fff",
        boxShadow: "0.8px 0.78px 0px 0.34px rgba(246, 247, 246, 0.904), " +
        "0.8px -0.78px 0px 0.34px rgba(13, 104, 240, 0.253), " +
        "-0.8px 0.78px 0px 0.34px rgba(13, 104, 240, 0.253)",
        padding: "1rem 1.5rem",
        marginBottom: "1rem",
        borderRadius: "10px",
        border: "2px solid transparent"}}><input type="radio" style={{marginRight: "12px"}}/>A. option 1</li>
      <li className="option" style={{ width: "80%",
      color: "#000",
      backgroundColor: "#fff",
      boxShadow: "0.8px 0.78px 0px 0.34px rgba(246, 247, 246, 0.904), " +
      "0.8px -0.78px 0px 0.34px rgba(13, 104, 240, 0.253), " +
      "-0.8px 0.78px 0px 0.34px rgba(13, 104, 240, 0.253)",
      padding: "1rem 1.5rem",
      marginBottom: "1rem",
      borderRadius: "10px",
      border: "2px solid transparent"}}><input type="radio" style={{marginRight: "12px"}}/>B. option 2</li>
      <li className="option" style={{ width: "80%",
      color: "#000",
      backgroundColor: "#fff",
      boxShadow: "0.8px 0.78px 0px 0.34px rgba(246, 247, 246, 0.904), " +
      "0.8px -0.78px 0px 0.34px rgba(13, 104, 240, 0.253), " +
      "-0.8px 0.78px 0px 0.34px rgba(13, 104, 240, 0.253)",
      padding: "1rem 1.5rem",
      marginBottom: "1rem",
      borderRadius: "10px",
      border: "2px solid transparent"}}><input type="radio" style={{marginRight: "12px"}}/>C. option 3</li>
      <li className="option" style={{ width: "80%",
      color: "#000",
      backgroundColor: "#fff",
      boxShadow: "0.8px 0.78px 0px 0.34px rgba(246, 247, 246, 0.904), " +
      "0.8px -0.78px 0px 0.34px rgba(13, 104, 240, 0.253), " +
      "-0.8px 0.78px 0px 0.34px rgba(13, 104, 240, 0.253)",
      padding: "1rem 1.5rem",
      marginBottom: "1rem",
      borderRadius: "10px",
      border: "2px solid transparent"}}><input type="radio" style={{marginRight: "12px"}}/>D. option 4</li>
    </ul>

    <div className="answer" style={{width: "80%", height: "40px", backgroundColor: "rgb(231, 233, 233)", borderRadius: "10px", 
    display: "flex", alignItems: "center", cursor: "pointer"}}>
<i className="fa-solid fa-plus" style={{paddingLeft: "1.7rem"}}></i>
      <span style={{paddingLeft: ".7rem"}}>A</span>

    </div>
    <div className="btn" style={{width: "80%", display: "flex", alignItems: "center", marginTop: "1rem"}}>
      <button style= {{padding: ".6rem 1.8rem ", fontSize: "1rem", backgroundColor:  "#351f97d8", color: "white",
      border: "2px solid transparent", borderRadius: "10px",  transition: "0.5s all"}}>Previous</button>
      <button style= {{padding: ".6rem 1.8rem", fontSize: "1rem", backgroundColor:  "#351f97d8", color: "white",
       border: "2px solid transparent", borderRadius: "10px", marginLeft: "auto",  transition: "0.5s all"}}>Next</button>
    </div>
  
  </div>



  </div>


      
    </div>
    </>
   
  )
}

export default QuestionSection
