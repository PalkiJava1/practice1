import React, {useState} from 'react'; 
import { useDispatch } from "react-redux";
import {CHECK} from "../redux/actions/Action";
const About = () => {

  // return (
  //   <label>
  //     <input onChange={handlechange} type="checkbox" />
  //     Please check the checkbox
  //   </label>
  // )
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const handleChange = () => {

    setChecked(!checked);
    dispatch(CHECK(checked));

  };

  return (

    <div>

      <label>
        <input onChange={handleChange} type="checkbox" />
        Please check the checkbox

      </label>
      <p>
        {checked ? 'Checked' : 'Not checked'}
      </p>

    </div>

  );
};

export default About;