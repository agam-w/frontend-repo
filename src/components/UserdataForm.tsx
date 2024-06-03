"use client";
import { User, updateUserData } from "@/apis/userApi";
import { TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import UpdateButton from "./UpdateButton";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  UpdateProcessStatus,
  setMessage,
  setStatus,
} from "@/store/features/updateProcessSlice";

function UserdataForm({ data }: { data?: User }) {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.updateProccess.status);
  const message = useAppSelector((state) => state.updateProccess.message);

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
    dispatch(setStatus(UpdateProcessStatus.Loading));

    const data = {
      name,
      username,
      email,
      phone,
    };

    await updateUserData(data)
      .then((res) => {
        console.log(res);
        dispatch(setStatus(UpdateProcessStatus.Success));
        dispatch(setMessage(res.message));
      })
      .catch((err) => {
        console.error(err);
        dispatch(setStatus(UpdateProcessStatus.Error));
        dispatch(setMessage("Error updating data"));
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

      <div>
        {status == UpdateProcessStatus.Loading && (
          <Typography variant="body1" gutterBottom>
            Updating ...
          </Typography>
        )}

        {status == UpdateProcessStatus.Success ||
        status == UpdateProcessStatus.Error ? (
          <Typography variant="body1" gutterBottom>
            {message}
          </Typography>
        ) : null}
      </div>

      <UpdateButton
        onClick={updateData}
        disabled={status == UpdateProcessStatus.Loading}
      />
    </div>
  );
}

export default UserdataForm;
