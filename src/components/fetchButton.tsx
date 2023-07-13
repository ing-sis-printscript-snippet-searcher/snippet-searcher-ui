"use client"
import {Button} from "@mui/material";
import axios from "@/util/axios";

export default function FetchButton(){
  const fetchData = async () => {
    // Fetch /snippets via axios
    // Set the data in state
    const response = await axios.get(`actuator`)
  }
  return (
      <Button onClick={fetchData}>Fetch Data</Button>
  )
}
