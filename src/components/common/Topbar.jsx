import axios from "axios";
import React, {useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiUrl } from "../../apiurl";

const Topbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [logo, setlogo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const token = localStorage.getItem('admintoken')
  // console.log(token);
const handleSearchChange = (event) => {
  const { value } = event.target;
  setSearchQuery(value);
  handleSearch(value); 
  console.log(searchQuery,"value event");
};

  const searchUser = async (email) => {
    try {
      const response = await axios.post(`${apiUrl}/search_user?email=${email}`,{}, {
      
        headers:{token:token}
      });
      console.log(response.data.data,"data respon");
      return response.data.data;
    } catch (error) {
      console.error('Error searching user:', error);
    }
  };
  
  const searchBlog = async (title) => {
    try {
      const response = await axios.post(`${apiUrl}/search_blog?title=${title}`,{}, {
     
        headers:{token:token}
      });
      console.log(response.data.data,"data respon");
      return response.data.data;
    } catch (error) {
      console.error('Error searching blog:', error);
    }
  };

  const searchTransactions = async (query) => {
    try {
      const response = await axios.post(`${apiUrl}/search_transictions?transactionId=${query}`,{}, {
        headers: { token: token }
      });
      console.log(response.data.data, "data respon");
      return response.data.data;
    } catch (error) {
      console.error('Error searching transactions:', error);
    }
  };

  const handleSearch = async (query) => {
    try {
      let searchData
      if (location.pathname === '/user_management') {
        searchData = await searchUser(query);
        navigate('/user_management',{state:{searchData} })
      }
       else if(location.pathname === '/blogs') {
        searchData = await searchBlog(query);
        navigate('/blogs',{state:{searchData} })
      }
      else if(location.pathname === '/deposit_withdraw'){
        searchData = await searchTransactions(query);
        navigate('/deposit_withdraw', { state: { searchData } });
      }
      console.log('Search results:', searchData);
     
    } catch (error) {
      // Handle errors
      console.error('Error searching:', error);
    }
  };

  return (
    <div className="sticky top-0 z-10 bg-background flex justify-between text-sm px-8 text-[#8F98A1] gap-10  items-center w-full h-[75px] md:h-[95px] ">
      {
        location.pathname==='/'&&<>
        <div className="flex items-center gap-5">
        <img
          src="/assets/topbar/MegaMenu.svg"
          alt="logo"
          className="w-[22px] h-[22px]"
        />
        <div className="w-[400px] h-[60px] flex items-center bg-[#161D26] rounded-[20px] px-5">
          <img
            src="/assets/topbar/searchIcon.svg"
            alt="logo"
            className="w-5 h-5"
          />
          <input
            placeholder="Search in dashboard..."
            className="flex-1 bg-[#161D26] border-none focus:border-none focus:ring-0 focus:outline-none px-4 shadow"
          />
        </div>
      </div>

        <div className="flex items-center gap-5">
          <div className="w-[145px] h-[60px] flex gap-2 items-center rounded-[20px] px-4 bg-[#161D26]">
          <img
            src="/assets/topbar/uk.png"
            alt="logo"
            className="w-6 h-6"
          />
          <span>English</span>
          <img
            src="/assets/topbar/ArrowDownIcon.svg"
            alt="logo"
            className="w-6 h-6"
          />
          </div>
          <img
            src="/assets/topbar/Wallet.svg"
            alt="logo"
            className="w-[60px] h-[60px]"
          />
          <img
            src="/assets/topbar/Settings.svg"
            alt="logo"
            className="w-[60px] h-[60px]"
          />
          <img
            src="/assets/topbar/Notification.svg"
            alt="logo"
            className="w-[60px] h-[60px]"
          />
        </div>
        </>
      }
      {
        location.pathname!=='/'&&<>
        <h6 className="text-[24px] font-semibold text-white">{location?.pathname.slice(1,location.pathname.length).toLocaleUpperCase()}</h6>
        <div className="flex gap-5 items-center">
          <input 
          className="bg-[#303A46] text-[12px] border border-[#E2E8F0] focus:outline-none px-3 rounded-[11px] w-[282px] h-[36px]"
          placeholder="Type here..."
          value={searchQuery}
          onChange={handleSearchChange}
          />
          <div className="flex gap-1 items-center">
            <img src="/assets/topbar/person.svg" alt="icon" className="w-6 h-6"/>
            <span className="text-[15px] font-bold">Sing In</span>
          </div>
          <img src="/assets/topbar/setting2.svg" alt="icon" className="w-6 h-6"/>
          <img src="/assets/topbar/bell2.svg" alt="icon" className="w-6 h-6"/>

        </div>
        </>
      }
    </div>
  );
};

export default Topbar;
