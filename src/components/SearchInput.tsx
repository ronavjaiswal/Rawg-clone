import { Input, InputElement, InputGroup, Kbd } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup flex="1">
      <>
        <Input
          colorPalette="gray"
          borderRadius={20}
          placeholder="Search games..."
          variant="subtle"
        ></Input>
      </>
    </InputGroup>
  );
};

export default SearchInput;
