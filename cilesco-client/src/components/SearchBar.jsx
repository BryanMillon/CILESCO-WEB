import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideo } from '../actions';

export const SearchBar = ({pageOne}) => {
    const dispatch = useDispatch();
    const [name, SetName] = useState("");
  
    function handleInputChange(e) {
      e.preventDefault();
      SetName(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      dispatch(getNameVideo(name));
      SetName("");
      pageOne();
    }
  
  return (
    <div>
        <form>   
    <label for="default-search" className=" mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
    <div className="relative max-w-[75%] mx-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-[#6E28AC] " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input onChange={(e) => handleInputChange(e)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-[#6E28AC] rounded-lg bg-gray-50 focus:ring-[#6E28AC] focus:border-[#6E28AC] " placeholder="Busca una palabra" required/>
        <button onClick={(e) => handleSubmit(e)} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#F98D00] hover:bg-[#F98D00]/90 focus:ring-4 focus:outline-none focus:ring-[#F98D00] font-medium rounded-lg text-sm px-4 py-2 ">Buscar</button>
    </div>
</form>
    </div>
  )
}
