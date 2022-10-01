import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const [VideosData, setVideosData] = useState([]);
  const [ChannelData, setChannelData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${id}`).then(
      (response) => setChannelData(response.items)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    fetchFromAPI(
      `search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`
    ).then((response) => setVideosData(response.items));
    console.log(VideosData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.log(ChannelData);
  return (
    <Stack
      sx={{
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <img
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--FUFoeQpW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/p5wilmn62vczuw4z7kjy.png"
          alt="img"
        />{" "}
      </Box>
      <Box sx={{ alignSelf: "center" }}>
        <ChannelCard
          channelDetail={ChannelData[0]}
          subscriber={true}
          marginTop={"-110px"}
        />
      </Box>
      <Box display="flex" p="2">
        <Videos videos={VideosData} />
      </Box>
    </Stack>
  );
};

export default ChannelDetail;
