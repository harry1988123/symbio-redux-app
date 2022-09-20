import axios from "axios";
import React, { useState, useEffect } from "react";
import Employee from "./Employee";

const Employees = () => {
  const [empData, setEmpData] = useState(null);
  const [err, setErr] = useState(null);
  const URL = "http://dummy.restapiexample.com/api/v1/employees";

  useEffect(() => {
    fetchData(URL);
  }, []);

  const fetchData = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setEmpData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setErr(err.response.statusText + ". " + err.message);
      });
  };

  return <>{empData ? <Employee empData={empData} /> : <>{err}</>}</>;
};

export default Employees;
