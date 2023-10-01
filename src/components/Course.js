import React from "react";
import { Alert,Button, TextField, FormLabel, Paper, Stack } from "@mui/material";
import { useState } from "react";
import Axios from 'axios';
export default function Course() {
    const [file,setFile]=useState(null);
    const [status,setStatus]=useState(false);
    function handleFileChange(event){
        setFile(event.target.files[0])
    }
    const handleUpload=async()=>{
        if(!file)return;
        const formData=new FormData();
        formData.append('file',file);
        try{
            await Axios.post('http://localhost:5000/api/course/upload',formData,{
                headers:{
                    'content-type':'multipart/form-data'
                },
            });
            setStatus(true);
        } catch(error){
            console.error('error upload data:',error)
        }
    }
  return (
    <Stack direction="row" spacing={3}>
      <Paper elevation={6} sx={{ height: "85vh", width: "30%" }}>
        <h4>Course Bulk Posting(note:only upload csv files)</h4>
        <Paper>
          <FormLabel>File Upload in CSV format only</FormLabel>
          <TextField type="file" name="file" onChange={handleFileChange} hiddenLabel="Browse"></TextField>
          <Button onClick={handleUpload}>Upload</Button>
          {status && <Alert severity="success">Csv file upload Successfully</Alert>}
        </Paper>

        <Stack direction="column" spacing={3}>
          <TextField label="CourseCode" />
          <TextField label="CourseName" />
          <TextField label="Year" />
        </Stack>
      </Paper>
      <Paper
        elevation={6}
        sx={{ height: "85vh", width: "70%", backgroundColor: "#F8FF95" }}
      >
        <h4>course data post here</h4>
      </Paper>
    </Stack>
  );
}
