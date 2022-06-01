import Post from "../post/Post"
import "./postes.css"

export default function Postes({ postes}) {
  return (
    <div className="postes">
        {postes.map((p) =>(
        <Post post={p}/>
        ))}
    </div>
  )
}
