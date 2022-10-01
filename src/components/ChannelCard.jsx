import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({
  channelDetail,
  subscriberCount,
  DetailWidth,
  marginTop,
}) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "300px", md: "280px" },
        boxShadow: "none",
        borderRadius: "20px",
        marginTop,
      }}
    >
      <Link
        to={
          channelDetail?.id?.channelId
            ? `/channel/${channelDetail?.id?.channelId}`
            : "/channel"
        }
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              marginY: "10px",
              alignSelf: "center",
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
          {subscriberCount ? (
            <Typography variant="p" sx={{ fontWeight: "500", font: "bold" }}>
              {channelDetail?.statistics?.subscriberCount} Subscribers
            </Typography>
          ) : null}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
