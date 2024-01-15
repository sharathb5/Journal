import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create  = () => {
    const[title, setTitle] = useState('');
    const[text, setText] = useState('');
    const[author, setAuthor] = useState('Seth');
    const[isPending, setisPending]= useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, text, author};
        setisPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog) 
        }).then(()=> {
            console.log('New Blog Added');
            setisPending(false);
            history.push('/');
        })
        
    }
    return ( 
        <div className="create">
        <h2> Add a new Blog </h2>
        <form onSubmit={handleSubmit}>
            <label> Blog title: </label>
            <input 
            type = "text"
            required
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />
            <label> Blog Body: </label>
            <textarea required             
            value = {text}
            onChange={(e)=> setText(e.target.value)}>
            </textarea>
                <select
                value = {author}
                onChange={(e)=> setAuthor(e.target.value)}>
                <option value = "Seth"> Seth</option> 
                <option value = "Sharath"> Sharath</option>  
                </select> {!isPending && <button>Add Blog</button>} {isPending && <button>Adding Blog...</button>}
                <p>{title}</p>
                <p>{text}</p>
                <p>{author}</p>
        </form>
        </div>
     );
}
export default Create ;