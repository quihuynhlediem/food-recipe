import classes from "./Post.module.css";
import styles from "./NewPost.module.css";
import { Link } from "react-router-dom";

function Post(props) {
	return (
		<li className={classes.post}>
			<p className={classes.author}>
				{props.author}
			</p>
			<p className={classes.text}>
				{props.body}
			</p>
      <p className={styles.actions}>
      <Link onClick={props.onOpen} style={{textDecoration: "none"}} to="/detail">
				<button id={props.id}>
					More
          </button>
        </Link>
        <button type="button" id={props.id} onClick={props.onDelete}>
					{" "}
					Delete{" "}
				</button>
			</p>
		</li>
	);
}

export default Post;
