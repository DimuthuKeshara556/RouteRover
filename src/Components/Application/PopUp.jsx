import React, { useState, useEffect } from "react";

const PopUp = ({ isOpen, setIsOpen, setHikersValue }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("name");
  const [selectedItems, setSelectedItems] = useState(() => {
    const savedItems = localStorage.getItem("selectedHikers");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const friendName = ["Alice", "Bob", "Charlie", "Diana", "Edward"];

  useEffect(() => {
    localStorage.setItem("selectedHikers", JSON.stringify(selectedItems));
  }, [selectedItems]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setFilteredOptions(
      friendName.filter((friendName) =>
        friendName.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSelectChange = (event) => {
    if (!selectedItems.includes(event.target.value)) {
      setSelectedItems([...selectedItems, event.target.value]);
    }
  };

  const removeItem = (item) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  const handleClick = () => {
    setIsOpen(false);
    setHikersValue(selectedItems.length + 1);
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex md:items-end md:justify-center min-h-screen pt-4 md:px-4 pb-20 text-center sm:block sm:p-0">
        <div className="md:fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className=" hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          ​
        </span>
        <div className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="w-full py-10  px-5 font-Raleway pt-16 md:pt-20 md:px-10">
            <p className="font-black text-main">
              Find <span className="text-secondary">Friends</span>
            </p>
            <p className="font-medium mt-3 ">
              Connect with like-minded adventurers on RouteRover!
            </p>
            <div className="mt-6 flex flex-col md:flex-row w-full justify-between gap-7">
              <section className="w-full ">
                <div className="flex items-center mb-4">
                  <input
                    id="searchByName"
                    type="radio"
                    name="searchType"
                    value="name"
                    checked={selectedOption === "name"}
                    onChange={() => setSelectedOption("name")}
                    className="w-4 h-4 text-main bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor="searchByName"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Search By Name
                  </label>
                </div>
                {selectedOption === "name" && (
                  <div className="mb-4 relative">
                    <input
                      type="text"
                      value={searchValue}
                      onChange={handleInputChange}
                      placeholder="Type friends name..."
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-main focus:border-main block w-full p-2.5"
                    />
                    {searchValue && (
                      <ul className="absolute w-full bg-white border border-gray-300 mt-1 rounded-lg text-[12px]">
                        {filteredOptions.map((option) => (
                          <li
                            key={option}
                            onClick={() => {
                              setSearchValue(option);
                              setFilteredOptions([]);
                              handleSelectChange({ target: { value: option } });
                            }}
                            className="cursor-pointer p-2 hover:bg-gray-100"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </section>

              <section className="w-full">
                <div className="flex items-center mb-4">
                  <input
                    id="searchByNearYou"
                    type="radio"
                    name="searchType"
                    value="nearYou"
                    checked={selectedOption === "nearYou"}
                    onChange={() => setSelectedOption("nearYou")}
                    className="w-4 h-4 text-main bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor="searchByNearYou"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Search By Near You
                  </label>
                </div>

                {selectedOption === "nearYou" && (
                  <div className="mb-4 w-full">
                    <select
                      id="nearYouDropdown"
                      onChange={handleSelectChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main w-full p-2.5"
                    >
                      <option value="" className="disabled selected hidden">
                        Select Freinds
                      </option>
                      <option value="Alice">Alice</option>
                      <option value="Bob">Bob</option>
                      <option value="Charlie">Charlie</option>
                      <option value="Diana">Diana</option>
                      <option value="Edward">Edward</option>
                    </select>
                  </div>
                )}
              </section>
            </div>
            <p className="font-bold mt-5">Members</p>
            <div className="mt-4 p-3 border rounded-xl">
              <ul className=" text-sm font-medium  list-disc pl-5">
                {selectedItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center mb-1 justify-between"
                  >
                    {item}
                    <button
                      onClick={() => removeItem(item)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <span className="sr-only w-[2px]">Remove</span>❌
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[9px] mt-5">
              *Are you a solo hiker? Please continue
            </p>
            <div className="flex items-center justify-between mt-8 text-[15px] font-bold">
              <button
                className="px-5 py-2 border rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-5 py-2 border rounded-full bg-main text-white"
                onClick={handleClick}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
