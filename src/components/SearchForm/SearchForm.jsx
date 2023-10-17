import React from "react";
import { TextField, Box } from "@mui/material";
import Button from "../Button/Button";
import InputAdornment from "@mui/material/InputAdornment";
import "./searchForm.scss";
import { useFormik } from "formik";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      console.log(values);
      onSubmit(values.search);
    },
  });
  
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="form__field">
        <Box sx={{ background: "#fff", borderRadius: "5px" }} className='input'>
          <TextField
            className='input'
            {...formik.getFieldProps("search")}
            placeholder="Search wallpapers"           
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <SearchIcon sx={{ marginRight: "10px" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box> 
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
};

export default SearchForm;
