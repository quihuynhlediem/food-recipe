import classes from "./Post.module.css";

function Post(props) {
  return (
    <li className={classes.post} id={props.id}>
      <p id={props.id} className={classes.author}>{props.author}</p>
      <p id={props.id} className={classes.text}>{props.body}</p>
      {/* <p>{props.id}</p> */}
    </li>
  );
}

export default Post;
