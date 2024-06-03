"use client";
import { User, updateUserData } from "@/apis/userApi";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import UpdateButton from "./UpdateButton";

function UserdataForm({ data }: { data?: User }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // set data
    setName(data?.name || "");
    setEmail(data?.email || "");
    setUsername(data?.username || "");
    setPhone(data?.phone || "");
  }, [data]);

  const updateData = async () => {
    const data = {
      name,
      username,
      email,
      phone,
    };

    await updateUserData(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="mb-6 max-w-md flex flex-col gap-4">
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="phone"
          label="Phone"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <UpdateButton onClick={updateData} />
    </div>
  );
}

export default UserdataForm;
