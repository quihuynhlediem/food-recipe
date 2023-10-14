import styles from "./Author.module.css";
import authorImg from "../images/author-avatar.png";

function Author() {
  let url = "#";
	return (
    <div className={styles.author_container}>
      <img src={authorImg} alt="author" className={styles.author_img} />
      <div className={styles.author_info}>
        <div className={styles.author_name}>John Hoskin</div>
        <div className={styles.author_badget}>American Chef Specialist</div>
				<a href={url}>More From This Chef »</a>
			</div>
		</div>
	);
}

export default Author;
