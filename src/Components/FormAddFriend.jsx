import React, { useState } from "react";
import Buttons from "./Buttons";

export default function FormAddFriend({ onAddFriend }) {
  const [friendData, setFriendData] = useState({
    name: "",
    image: "https://i.pravatar.cc/48",
  });

  function handleFriendData(e) {
    const { name, value } = e.target;

    setFriendData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name: friendData.name,
      image: `${friendData.image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleFormSubmit}>
      <label>👬Friend name</label>
      <input
        name="name"
        value={friendData.name}
        onChange={handleFriendData}
        type="text"
      />
      <label> 📸Image URL</label>
      <input
        name="image"
        value={friendData.image}
        onChange={handleFriendData}
        type="text"
      />
      <Buttons>Add</Buttons>
    </form>
  );
}
