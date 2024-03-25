"use client";

import Input from "@/app/components/common/Input";
import { useState } from "react";
import Icon from "../../common/Icon";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <div className="w-full h-[50px] relative shadow-default">
      <Input
        type="text"
        placeholder="텍스트 필드"
        value={inputValue}
        onChange={handleChange}
      />
      {inputValue && (
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2"
          onClick={handleClear}
        >
          <Icon type="close" alt="close" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
