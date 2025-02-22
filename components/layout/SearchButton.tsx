import React from "react";
import { Search } from "lucide-react";

export const SearchButton = () => {
  return (
    <button className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-blue-600">
      <Search className="w-5 h-5" />
      <span>Search</span>
    </button>
  );
};
