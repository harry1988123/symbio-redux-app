import axios from "axios";
import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import { useSelector, useDispatch } from "react-redux";
import { setData, setError, selectError } from "../features/employeeSlice";

const Employees = () => {
  const URL = "http://dummy.restapiexample.com/api/v1/employees";
  const dispatch = useDispatch();
  const err = useSelector(selectError);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchData(URL);
    // eslint-disable-next-line
  }, []);

  const fetchData = (url) => {
    axios
      .get(url)
      .then((res) => {
        dispatch(setData(res.data.data));
        dispatch(setError(null));
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError(err.response.statusText + ". " + err.message));
      });
  };

  return (
    <>
      {isLoaded ? (
        <Employee />
      ) : (
        <>
          {err}
          <br />
          <button onClick={() => window.location.reload(false)}>
            Click here for Reload
          </button>
        </>
      )}
    </>
  );
};

export default Employees;
