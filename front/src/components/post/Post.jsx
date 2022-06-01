import './post.css'
import {Link} from "react-router-dom"

export default function Post({post}) {
    const PF = "http://localhost:5000/images/";

    return (
        <div className="post">
            {post.photo && (
            <img className="postimg"
            src={PF+post.photo}
            alt=""/>
            )}
            <div className="postinfo">
                
                <Link to={`/post/${post._id}`} className="link">        
                <span className="posttitle">
                    {post.title}
                </span>
                </Link> 
                <hr/>

                <span className="postdate">
                  {new Date(post.createdAt).toDateString()}  
                </span>
                
            </div>                                
            <p className="postdesc">
                {post.desc}
            </p>
        </div>
    )
}
