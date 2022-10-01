import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { demoVideoUrl } from "../utils/constants";

const SearchBar = () => {
  const [SearchItem, setSearchItem] = useState("");

  return (
    <Paper
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={SearchItem}
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
      <Link to={SearchItem ? `/search/${SearchItem}` : demoVideoUrl}>
        <IconButton type="submit" sx={{ p: "10px ", color: "red" }}>
          <Search />
        </IconButton>
      </Link>
    </Paper>
  );
};

export default SearchBar;
