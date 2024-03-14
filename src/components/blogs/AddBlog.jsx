import React, { useEffect, useState } from "react";
import RichTextEditor from "./RichTextEditor";
import { apiUrl } from "../../apiurl";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { useParams } from "react-router";

const AddBlog = ({ blogId }) => {
  console.log(blogId, "BLOGID");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    status: "",
    visibility: "",
    publishon: "",
    tags: "",
    videourl: "",
    blogimg:null
  });
  const token = localStorage.getItem("admintoken")
  // const navigate = useNavigate();

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDescriptionChange = (description) => {
    setFormData({ ...formData, description });
    // console.log(formData.description);
  };

  const handleFileChange = (e) => {
     const { name, value, files } = e.target;
    const newValue = name === 'blogimg' ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };
// const htmlcontent = formData.description

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    if (blogId) {
      try {
        const response = await axios.put(`${apiUrl}/update_blog/${blogId}`, formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
            token: token
          },
        });
        console.log(response.data,"UPDATE");
        window.location.reload()
        toast.success(response.data.message, {
          style: {
            background: '#12181F',
            color: '#FFF'
          }
        });
      } catch (error) {
        console.error("Error:", error);
        toast.error("Failed to update Blog", {
          style: {
            background: '#12181F',
            color: '#FFF'
          }
        });
      }
    } else {

      try {
        const response = await axios.post(`${apiUrl}/add_blogs`, formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
            token: token
          },
        });
        console.log(response.data);
        window.location.reload()
        toast.success(response.data.message, {
          style: {
            background: '#12181F',
            color: '#FFF'
          }
        });
      } catch (error) {
        console.error("Error:", error);
        toast.error("Failed to add Blog", {
          style: {
            background: '#12181F',
            color: '#FFF'
          }
        });
      }
    };
  }

  useEffect(() => {
    if (blogId) {
      const fetchAllBlogsData = async () => {
        try {
          const response = await axios.get(`${apiUrl}/get_all_blogs`, { headers: { token: token } });
          const allBlogsData = response.data.data;
          const blogData = allBlogsData.find(blog => blog._id === blogId);
          console.log(allBlogsData, "allblogdata");
          if (blogData) {
            console.log(blogData, "blogdata");
            // setFormData(blogData);
            const blogimg = blogData.blogimg ? {name:blogData.blogimg} : "";
            console.log("IMAGE",blogimg.name);
            setFormData({
              title: blogData.title,
              description: blogData.description,
              author: blogData.author,
              status: blogData.status,
              visibility: blogData.visibility,
              publishon: blogData.publishon,
              tags: blogData.tags,
              videourl: blogData.videourl,
              blogimg: blogimg
            });
          } else {
            console.log("Blog not found");
          }
        } catch (error) {
          console.error("Error fetching all blogs data:", error);
        }
      };
      fetchAllBlogsData();
      // console.log("formData.blogimg:", formData.blogimg);
    }
  }, [blogId, token]);

 
  return (
    <div className="-mt-2">
      <h6 className="text-base font-bold bg-gradient-to-b from-[#9D6CFF] to-[#FE487C] bg-clip-text text-transparent">
        New Blog
      </h6>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-8">
          <div>
            <div className="mt-2 w-[116px] h-[84px] bg-white rounded-sm"></div>
          </div>
          <div className="flex flex-col gap-0.5">
            <strong className="text-[#989898] font-bold text-[13px]">
              Image
            </strong>
            <div className="text-sm  h-[40px] w-[338px] bg-white rounded-[10px]">
              <label
                className={` cursor-pointer flex h-[40px] pl-4 rounded-[10px] "`}
              >
                <div   className=" text-[#989898] text-[13px] absolute h-[40px] w-[248px] whitespace-nowrap overflow-hidden text-ellipsis flex items-center ">
                {formData.blogimg ? formData.blogimg.name : "Choose File"}
                
                </div>
                <div
                  className={`text-[#6B6B71] text-xs h-[40px] w-[90px] ml-[232px] font-semibold bg-[#d9d9d9] rounded-e-[10px] flex items-center justify-center`}
                >
                  browse
                </div>
                <input
                  name="blogimg"
                  // value={formData.blogimg}
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <strong className="text-[#989898] font-bold text-[13px] mt-2">
              Title
            </strong>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-[338px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"
              placeholder="Title"
            />

            {/* <div
            className="w-[338px] h-[120px] resize-none rounded-[10px] bg-white text-[14px] text-[#989898]  focus:outline-none focus:ring-0 focus:border-none"
            // placeholder="Description..."
          >

          </div> */}
            <div className="flex gap-5 mt-2">
              <div className="flex flex-col gap-1">
                <strong className="text-[#989898] font-bold text-[13px]">
                  Author
                </strong>
                <input
                  name="author"
                  className="w-[147px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"
                  placeholder="Author"
                  value={formData.author}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-[#989898] font-bold text-[13px]">
                  Status
                </strong>
                <div className="w-[169px] flex rounded-[10px] bg-white">
                  <input
                    name="status"
                    className="w-[169px] h-[40px] rounded-[10px] text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"
                    value={formData.status}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-2">
              <div className="flex flex-col gap-1">
                <strong className="text-[#989898] font-bold text-[13px]">
                  Visibility
                </strong>
                <input
                  name="visibility"
                  className="w-[147px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"
                  placeholder="Visibility"
                  value={formData.visibility}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-[#989898] font-bold text-[13px]">
                  Publish on
                </strong>
                <div className="w-[169px] flex rounded-[10px] bg-white">
                  <input
                    name="publishon"
                    className="w-[169px] h-[40px] rounded-[10px] text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"
                    value={formData.publishon}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <strong className="text-[#989898] font-bold text-[13px] mt-2">
              Video url
            </strong>
            <input
              name="videourl"
              className="w-[338px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"
              value={formData.videourl}
              onChange={handleChange}
            />
            <strong className="text-[#989898] font-bold text-[13px] mt-2">
              tags
            </strong>
            <input
              name="tags"
              className="w-[338px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"
              value={formData.tags}
              onChange={handleChange}
            />
            {
              blogId ? (
                <button
                  type="submit"
                  className="bg-[#5D5FEF] w-[100px] px-5 py-2 rounded-[50px]  mt-8 shadow font-semibold text-[15px]">
                  Update
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-[#5D5FEF] w-[100px] px-5 py-2 rounded-[50px]  mt-8 shadow font-semibold text-[15px]">
                  Add
                </button>
              )
            }

          </div>
          <div className="flex flex-col gap-1">
            <strong className="text-[#989898] font-bold text-[13px]">
              Description
            </strong>
            <RichTextEditor
              name="description"
              model={formData.description} 
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
