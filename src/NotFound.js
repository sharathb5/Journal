import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return ( 
        <div className = "Not Found">
        <h2>Sorry Page cannot be found</h2>
        <Link to= "/"> Back to Home</Link>
        </div>
     );
}
 
export default NotFound;