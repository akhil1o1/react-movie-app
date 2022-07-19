import React from "react";
import {FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import {nanoid} from "nanoid";

function SelectYear({releaseYears, year}){
    return(<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Release Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Release Year"
        //   onChange={handleChange}
        >
        {releaseYears.map((item)=>(
            <MenuItem key={nanoid()} value={item.name}>{item.name}</MenuItem>
        ))}
        </Select>
      </FormControl>)
}

export default SelectYear;