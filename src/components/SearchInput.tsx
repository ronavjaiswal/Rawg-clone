import { Input, InputElement, InputGroup, Kbd } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearch: (searchText: string) => void
}

const SearchInput = ({onSearch}:Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) 
            {
                console.log(ref.current.value)
                onSearch(ref.current.value)
            };
      }}
    >
      <InputGroup flex="1">
        <>
          <Input
            ref={ref}
            colorPalette="gray"
            borderRadius={20}
            placeholder="Search games..."
            variant="subtle"
          ></Input>
        </>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
