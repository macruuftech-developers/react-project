import { useState } from "react";

const Feed = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    img: null, // Change img initial state to null
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if an image is selected
    const newPost = {
      title: formData.title,
      image: formData.img,
      user: user,
      date: new Date(),
    };

    setPosts([...posts, newPost]);
    setFormData({ title: "", img: null });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="post"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          value={formData.title}
          required
        />
        <input
          type="file"
          onChange={(e) => setFormData({ ...formData, img: e.target.files[0] })}
        />
        <button type="submit">Post</button>
      </form>
      {posts.map((post, index) => (
        <div key={index}>
          <h4>{post.title}</h4>
          {post.image && (
            <img
              style={{ objectFit: "fill", width: "50%" }}
              src={URL.createObjectURL(post.image)}
              alt=""
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Feed;
