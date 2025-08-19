import { Input, InputGroup, InputElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FormEvent, useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) onSearch(ref.current.value);
  };

  return (
    <form onSubmit={handleSubmit} style={{ flex: 1 }}>
      <InputGroup>
        {/* <InputLeftElement children={<BsSearch />} /> */}
        <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="subtle" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;