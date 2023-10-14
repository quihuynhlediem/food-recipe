import styles from "./CommentShow.module.css";
import userImg from "../images/user-avatar.png";

function CommentShow() {
	return (
    <div className={styles.comments_container}>
      <div className={styles.user_comment}>
        <div className={styles.comment_header}>
          <div className={styles.comment_user}>
						<img src={userImg} alt="user" />
            <div className={styles.cmt_user_date}>
              <span className={styles.comment_username}>levanlan</span>
							<span className={styles.comment_date}>12/10/2023</span>
						</div>
					</div>
				</div>
        <div className={styles.comment_content}>
					<p>Add more sugar for better taste</p>
				</div>
			</div>
		</div>
	);
}

export default CommentShow;
