import { useState } from "react";

const Feed = ({ user }) => {
  const [post, setPost] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    img: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: formData.title,
      image: formData.img,
      user: user,
      date: new Date(),
    };
    setPost([...post, newPost]);
    -setFormData({ title: "", img: "" });
    console.log(postList);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          placeholder='post'
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <input
          type='file'
          onChange={(e) => setFormData({ ...formData, img: e.target.files[0] })}
        />
        <button type='submit'>Post</button>
      </form>
    </div>
  );
};

export default Feed;
