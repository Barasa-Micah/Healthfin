import React, { useState } from "react";

const HFContainer = ({ details, updateDescription, isEditing, startEditing, cancelEditing }) => {
  const [editedDescription, setEditedDescription] = useState(details.description);

  const handleChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleSave = () => {
    updateDescription(editedDescription);
  };

  return (
    <div className="w-[25%] h-[450px] flex flex-col justify-center items-center shadow-md">
      <div className="w-[100%] h-[75%]">
        <img
          src={details.imageSrc}
          alt=""
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="h-[50%] w-[100%] flex flex-col justify-evenly items-start p-10">
        <h1 className="text-2xl font-semibold">{details.title}</h1>
        {isEditing ? (
          <textarea
            className="w-full h-24 border rounded p-2"
            value={editedDescription}
            onChange={handleChange}
          />
        ) : (
          <p>{details.description}</p>
        )}
        {isEditing ? (
          <div className="flex gap-2">
            <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={handleSave}>
              Save
            </button>
            <button className="bg-gray-500 text-white px-3 py-1 rounded" onClick={cancelEditing}>
              Cancel
            </button>
          </div>
        ) : (
          <button className="text-blue-700 mt-[50px]" onClick={startEditing}>
            Learn more +
          </button>
        )}
      </div>
    </div>
  );
};

export default HFContainer;
