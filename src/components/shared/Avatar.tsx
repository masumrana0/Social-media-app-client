"use client";
import React from "react";
import avatar from "/public/shared/avatar.png";
import Image from "next/image";

const Avatar = (photo = avatar) => {
  return (
    <div className="h-10 w-10 rounded-full">
      <Image width={500} alt="avatar" src={photo} />
    </div>
  );
};

export default Avatar;
