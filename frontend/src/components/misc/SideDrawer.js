import { Box, Button, Menu, MenuButton, Text, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"white"}
      width={"100%"}
      borderWidth={"5px"}
      padding={"5px 10px 5px 10px"}
    >
      <Tooltip label="search users to chat" hasArrow placement="bottom-end">
        <Button variant={"ghost"}>
          <i
            className="fa-solid fa-magnifying-glass fa-bounce"
            style={{ color: "#6f7608" }}
          ></i>
          <Text display={{ base: "none", md: "flex" }} px={4}>
            Search User
          </Text>
        </Button>
      </Tooltip>
      <Text fontFamily={"Work sans"} fontWeight={"bold"} fontSize={"2xl"}>
        Chat-Guru
      </Text>
      <div>
        <Menu>
          <MenuButton padding={"1px"}></MenuButton>
        </Menu>
      </div>
    </Box>
  );
};

export default SideDrawer;
