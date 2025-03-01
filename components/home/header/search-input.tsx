import React from "react";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  return (
    <div className="relative w-full max-w-xs">
      <Input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        🔍
      </div>
    </div>
  );
};

export default SearchInput;
