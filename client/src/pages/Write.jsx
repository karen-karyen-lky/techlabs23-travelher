import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    const newPost = {
      title,
      desc: value,
      cat,
      img: file ? imgUrl : "",
      date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    };
    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, newPost);
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "guide"}
              name="cat"
              value="guide"
              id="guide"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="guide">Guide</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "experience"}
              name="cat"
              value="experience"
              id="experience"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="experience">Experiences Share</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "growth"}
              name="cat"
              value="growth"
              id="growth"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="growth">Personal growth</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "inspiration"}
              name="cat"
              value="inspiration"
              id="inspiration"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="inspiration">Inspiration</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
