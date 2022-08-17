

export default function Jokes(props) {
 return (
  <div className='jokes-container'>
   {props.setup && <h3>Setup: {props.setup}</h3>}
   <p>{props.joke}</p>
   <p>Upvotes: {props.upvotes}</p>
   <p>Downvotes: {props.downvotes}</p>
   <p>Comments: {props.comments[0].one} {props.comments[1].three}</p>
   {/* <p>Pun: {props.pun}</p> */}
  </div>
 )
}