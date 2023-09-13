import React from "react";
import Buttons from "./Buttons";

export default function Friend({
  friendObj,
  onSelectedFriend,
  selectedFriend,
}) {
  const isSelected = selectedFriend?.id === friendObj.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friendObj.image} alt={friendObj.name} />
      <h3>{friendObj.name}</h3>
      {friendObj.balance < 0 ? (
        <p className="red">
          You owe {friendObj.name} ₹{friendObj.balance}
        </p>
      ) : friendObj.balance > 0 ? (
        <p className="green">
          {friendObj.name} owes you ₹{friendObj.balance}
        </p>
      ) : (
        <p>You and {friendObj.name} are even.</p>
      )}
      <Buttons onClick={() => onSelectedFriend(friendObj)}>
        {isSelected ? "Close" : "Select"}
      </Buttons>
    </li>
  );
}
