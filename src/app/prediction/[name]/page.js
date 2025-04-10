"use client";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [age, setAge] = useState({});
  const [gender, setGender] = useState({});
  const [nationality, setNationality] = useState({});

  useEffect(() => {
    fetch(`https://api.agify.io?name=${params.name}`)
      .then((resp) => resp.json())
      .then((result) => setAge(result));
  }, [params.name]);

  useEffect(() => {
    fetch(`https://api.genderize.io?name=${params.name}`)
      .then((resp) => resp.json())
      .then((result) => setGender(result));
  }, [params.name]);

  useEffect(() => {
    fetch(`https://api.nationalize.io?name=${params.name}`)
      .then((resp) => resp.json())
      .then((result) => setNationality(result));
  }, [params.name]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>მომხმარებლის მონაცემები</h2>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>სახელი</th>
              <th style={styles.th}>რაოდენობა</th>
              <th style={styles.th}>საშუალო ასაკი</th>
              <th style={styles.th}>სქესი</th>
              <th style={styles.th}>ქვეყანა</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>{age?.name}</td>
              <td style={styles.td}>{age?.count}</td>
              <td style={styles.td}>{age?.age}</td>
              <td style={styles.td}>{gender?.gender}</td>
              <td style={styles.td}>{nationality?.nationality}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#333",
    marginBottom: "30px",
  },
  tableContainer: {
    width: "80%",
    maxWidth: "1000px",
    overflowX: "auto", 
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  th: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "14px 16px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    border: "1px solid #ddd",
  },
  td: {
    padding: "14px 16px",
    border: "1px solid #ddd",
    fontSize: "16px",
    color: "#555",
  },
};

export default Page;

