import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RequirementField = ({
  name,
  label,
  register,
  errors,
  setValue,
  getValue,
}) => {
    const { editCourse, course } = useSelector((state) => state.course);
  const [requirement, setRequirement] = useState("");
  const [requirementList, setRequirementList] = useState([]);

  const handleAddRequirements = () => {
    if (requirement) {
      setRequirementList([...requirementList, requirement]);
      setRequirement("");
    }
  };
  const handleRemoveRequirements = (index) => {
    const updatedRequirementList = [...requirementList];
    updatedRequirementList.splice(index, 1);
    setRequirementList(updatedRequirementList);
  };

  useEffect(() => {
     if (editCourse) {
       setRequirementList(course?.instructions);
     }
    register(name, { required: true, validate: (value) => value.length > 0 });
  }, []);

    useEffect(() => {
      setValue(name, requirementList);
    }, [requirementList]);

  return (
    <div className=" w-full flex flex-col gap-2 items-start">
      <label
        className=" text-richblack-5 font-normal text-sm leading-5"
        htmlFor={name}
      >
        {label}
        <sup className=" text-pink-200">*</sup>
      </label>
      <div className="flex flex-col gap-2 items-start w-full">
        <input
          type="text"
          id={name}
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className=" form-style w-full"
          placeholder="Enter Requirements of the course"
        />
        <button
          className=" text-yellow-50 pl-2 text-base font-bold"
          type="button"
          onClick={handleAddRequirements}
        >
          Add
        </button>
      </div>
      {requirementList.length > 0 && (
        <ul>
          {requirementList.map((req, index) => {
            return (
              <li
                key={index}
                className="flex items-center gap-2 text-richblack-5"
              >
                <span>{req}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveRequirements(index)}
                  className=" text-pure-greys-400 text-sm font-normal"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {errors[name] && (
        <span className=" text-pink-400 font-normal text-sm leading-5">
          {label} is required <sup className=" text-pink-200">**</sup>
        </span>
      )}
    </div>
  );
};

export default RequirementField;
