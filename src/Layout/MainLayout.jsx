import { Outlet } from "react-router-dom"
import TestNavBar from "../Components/Test/TestNavBar"
import { useEffect, useState } from "react"

const MainLayout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  
  return (
    <div  className="">
        <TestNavBar user={user} logout={logout} />
        <Outlet/>
    </div>
  )
}

export default MainLayout