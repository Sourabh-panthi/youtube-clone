import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [VideosData, setVideosData] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((response) =>
      setVideosData(response.items)
    );
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}> {searchTerm} Videos</span>
      </Typography>
      <Box sx={{ justifyContent: "center" }}>
        <Videos videos={VideosData} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
