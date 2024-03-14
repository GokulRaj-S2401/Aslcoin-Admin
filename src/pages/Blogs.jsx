import React, { useEffect, useState } from "react";
import Table from "../components/common/Table";
import { useLocation } from "react-router-dom";
import NavTool from "../components/common/NavTool";
// import Dialog from "../components/blogs/Dialog";
import AddBlog from "../components/blogs/AddBlog";
import { apiUrl } from "../apiurl";
import axios from "axios";
// import { toast } from 'react-toastify'; 

const Blogs = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [blogsData, setBlogsData] = useState([]);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const token = localStorage.getItem("admintoken")
  const searchResults = location.state || { searchData: [] };
console.log(searchResults.searchData,"datasearch");

useEffect(() => {
  if (searchResults.searchData && searchResults.searchData.length > 0) {
    setBlogsData(searchResults.searchData);
    console.log(searchResults.searchData.length, "blogpagedataresponsesearch");
  } else {
    setBlogsData([]);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/get_all_blogs`, { headers: { token: token } });
        console.log(response.data.data, "blogsDta???????");
        setBlogsData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }
}, [currentPage, token, searchResults.searchData.length]);

// useEffect(()=>{
//   console.log(searchResults.searchData, "Inside useEffect searchData value");
//   if(searchResults.searchData.length){
//     setBlogsData(searchResults.searchData)
//   }
// },[searchResults.searchData.length])
// console.log(blogsData,"blogpagedataresponsesearch");

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const fetchData = async () => {
//       try {
//           const response = await axios.get(`${apiUrl}/get_all_blogs`,{headers:{token:token}});
//           console.log(response.data.data,"blogsDta???????");
//           setBlogsData(response.data.data);
        
//       } catch (error) {
//         console.log(error);
//       }
//     };
//       fetchData();
     
//   }, [currentPage,token]);

 

  const handleEditClick = (blogId) => {
    setSelectedBlogId(blogId);
    setIsOpen(true);
  };

  const tableTitle = ["BLOG POST", "PAGE VIEW", "CREATED AT", "AUTHOR","ACTION"];

  // const getData = Array.from({ length: 8}, () => ({
  //   blogPost:"Filecoin vs. IPFS: Similarities and The Differences Between Them",
  //   page: "48",
  //   createdAt: "31-01-2024",
  //   author: "No Auther",
  // }));

  const button = [
    {
      title:'Add Blog',
      onClick:()=>{setIsOpen(true)}
    }
  ]

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogsData && blogsData.length > 0 ? blogsData.slice(indexOfFirstItem, indexOfLastItem) : [];

  return (
    <div className="p-8">
      {!isOpen&&<NavTool date={true} buttons={button}/>}
      {isOpen&&<AddBlog blogId={selectedBlogId}/>}
      {!isOpen&&<>
        <Table
        tableTitle={tableTitle}
        maxWidth={"95%"}
        backgroundColor={"#161D26"}
        padding={"24px 32px"}
        headingStyle={{
          fontSize: "11px",
        }}
        action={""}
      >
        {currentItems?.map((item, i) => (
          <tr key={i}>
            <td style={{width:'480px'}}>
                <div style={{marginTop:"-10px", fontSize: "15px", fontWeight: "500",position:'absolute',width:'440px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:"ellipsis" }}>
                    {item?.title}
                </div>
            </td>
            <td style={{ fontSize: "13px", fontWeight: "600"}}>
              {/* {item?.page} */}0
            </td>

            <td style={{ fontSize: "13px", fontWeight: "600"}}>
            {new Date(item?.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-')}
            </td>
            <td style={{ fontSize: "13px", fontWeight: "600",color:'#b3b3b3'}}>
              {item?.author}
            </td>
            <td 
            style={{ fontSize: "13px", fontWeight: "600",color:'#9D6CFF'}}
            onClick={() => handleEditClick(item?._id)}
            >
                Edit
            </td>
          </tr>
        ))}
      </Table>
      <div className="ml-4 my-5 flex gap-2 position-fixed">
     <button
              className="px-3 py-1.5 cursor-pointer rounded bg-[#303A46] text-xs"
              onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
        <div className="px-3 py-1.5 cursor-pointer rounded bg-[#303A46] text-xs">
          {currentPage}
        </div>
            <button
              className="px-3 py-1.5 cursor-pointer rounded bg-[#303A46] text-xs"
              onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
              disabled={indexOfLastItem >= blogsData.length}
            >
              Next
            </button>
       
      </div>
      </>}
    </div>
  );
};

export default Blogs;
