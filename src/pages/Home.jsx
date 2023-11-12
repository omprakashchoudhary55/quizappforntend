import React, { useState } from "react";
import Img from "../assests/img/hotal.jpg";
import { BsTranslate } from "react-icons/bs";
import ImportantQuestion from "./ImportantQuestion";
import SubHeader from '../components/SubHeader'
import QuestionSection from "./QuestionSection";
const Home = () => {

  const [current, setCurrent] = useState(1);
 
  return (
    <div>
    <div style={{display:current=== 1 ?"block":"none"}}>
    <SubHeader/>
    </div>
      <div
        
        style={{padding:"0 15px",display:current=== 1 ?"block":"none"}}
      >
        <div className="my-1">
          <h1 style={{ fontWeight: "700" }}>RSCIT Exam Solution</h1>
        </div>
        <div  style={{display:'flex',justifyContent:"space-between"}}>
          <div
            style={{
              width: "48%",
              height: "15vh",
              backgroundColor: "#fff",
              borderRadius: "10px",
              display: "inline-block",
              boxShadow:"rgba(225, 225, 225, 0.6) 5px 5px 5px, rgba(230, 230, 230, 0.6) -5px 5px 5px, rgba(225, 225, 225, 0.6) 5px 5px 5px, rgba(230, 230, 230, 0.6) 5px -5px 5px"
               }}
               
          >
            <div
              style={{
                position: "absolute",
                width: "45px",
                backgroundColor: "deeppink",
                padding: "5px 1px",
                height: "4vh",
                textAlign: "center",
                borderTopLeftRadius: "10px",
              }}
            >
              <span style={{ color: "#fff", alignItems: "center" }}>PRO</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                className=""
                style={{
                  backgroundColor: "yellow",
                  width: "80px",
                  height: "80px",
                  margin: "10px 0 0 45px",
                  borderRadius: "50%",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}
              >
                <BsTranslate className=" " style={{fontSize:"55px"}} />
              </div>
              <div style={{ marginTop: "4px" }}>
                <p
                  style={{
                    fontWeight: "700",
                    lineHeight: "15px",
                    padding: "0 0 15px",
                  }}
                  onClick={() => setCurrent((prev) => prev + 1)}
                >
                  RSCIT Importent Question
                  </p>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  <QuestionSection current={current} setCurrent={setCurrent}/>
      {/*<ImportantQuestion current={current} setCurrent={setCurrent}/>*/}
   </div>
  );
};

export default Home;
