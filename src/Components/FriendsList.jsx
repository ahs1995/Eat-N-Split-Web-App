import React from "react";
import Friend from "./Friend";

export default function FriendsList({
  friends,
  onSelectedFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          selectedFriend={selectedFriend}
          friendObj={friend}
          onSelectedFriend={onSelectedFriend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
