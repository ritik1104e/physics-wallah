import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './statelist.css';
import { Link, Redirect } from 'react-router-dom';

const StateList = () => {
  const [states, setStates] = useState({});

  useEffect(() => {
    getStates();
  }, []);

  const getStates = async () => {
    const res = await axios.get(process.env.REACT_APP_API_URL);
    setStates({ ...res.data });
  };

  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>COViTRACKER</h1>
        </div>
        <div className='list'>
          {Object.keys(states).map((state) => {
            return state === 'State Unassigned' ? null : (
              <div className='list-item'>{state}</div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StateList;
