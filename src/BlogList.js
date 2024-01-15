import { Link } from "react-router-dom";
// import ItemComponent from './ItemComponent';
// import { BlogDetails } from './BlogDetails'; 

// const handleClick=() => {
//   const confirmDelete = window.confirm('Are you sure you want to delete this blog post?');
//   if(confirmDelete){        
//       fetch('http://localhost:8000/blogs/' + blog.id,{
//       method: 'DELETE'
//   })}
// }
const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to= {`/blogs/${blog.id}`}> 
          <h2>{ blog.title }</h2>
          {/* <button onClick={() => handleClick(blog.id)}>
          <ItemComponent item={{ name: 'Delete' }} onDelete={() => handleClick(blog.id)} /> */}
            {/* </button> */}
          <p>Written by { blog.author }</p> 
          <p className="preview-text">{blog.text.slice(0, 100)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default BlogList;