import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MapComponent from "../../../Map/MapComponent";
import { Link } from "react-router-dom";

const ShareExperience = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: "",
    text: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Data saved successfully!");
    navigate("/community", { state: { formData } });
  };

  return (
    <div className="w-full">
      <div className=" flex flex-col md:flex-row w-full px-10 py-10  h-screen items-center justify-center">
        <MapComponent hikersValue={1} />
        <form
          onSubmit={handleSubmit}
          className=" w-full flex flex-col gap-4 py-10 md:px-10"
        >
          <label>mention your location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="rounded-3xl border p-4"
          />
          <label>Your Experience</label>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="write somthing here"
            className=" rounded-3xl  border p-4"
          />
          <div className="flex w-full items-center justify-between gap-2 mt-5">
            <Link to={"/application"}>
            <button className="border-main text-main border-2 rounded-full py-2  font-bold px-10 text-[12px]">
                Save & Close
              </button>
            </Link>

            <button
              type="submit"
              className="bg-main text-white rounded-full py-2 px-14 text-[12px] font-bold"
            >
              Share Now
            </button>
            {message && <div className="text-green-500">{message}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareExperience;
