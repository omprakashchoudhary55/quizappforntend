import React from "react";
import QuestionSection from "./QuestionSection";

const ImportantQuestion = ({ current,setCurrent }) => {
  return (
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
      <div
        style={{
          width: "100%",
          fontSize: "1rem",
        }}
      >
        <h2 style={{ color: "rgb(247, 51, 181)" }}>
          RSCIT Important Questions 2023 and RSCIT Exam Important Questions PDF
          in Hindi 
        </h2>
      </div>
      <table
        style={{
          width: "100%",
          border: "1px solid black",
          borderCollapse: "collapse",
          
        }}
      >
        <tr>
          <td
            style={{
              padding: "1rem",
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            Rscit Important Questions
             Answers part 1
          </td>
          <td
            style={{
              width: "25%",
              padding:"0 5px",
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            <button className="btn"
              style={{
                backgroundColor: "red",
                color: "#fff",
              }}
            onClick={() => setCurrent((prev) => prev + 1)}
            >
              Click Here
            </button>
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "1rem",
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            Rscit Important Questions
             Answers part 1
          </td>
          <td
            style={{
              width: "25%",
              padding:"0 5px",
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            <button className="btn"
              style={{
                
                backgroundColor: "red",
                color: "#fff",
              
              }}
            >
              Click Here
            </button>
          </td>
        </tr>
      </table>
     
      <QuestionSection curren={current} setCurren={setCurrent}/>
    </div>
  );
};

export default ImportantQuestion;
