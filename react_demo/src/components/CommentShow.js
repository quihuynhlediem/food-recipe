import styles from "./CommentShow.module.css";
import userImg from "../images/user-avatar.png";

function CommentShow(props) {
	return (
    <div className={styles.comments_container}>
      <div className={styles.user_comment}>
        <div className={styles.comment_header}>
          <div className={styles.comment_user}>
            <img className={styles.comment_user_img } src={userImg} alt="user" />
            <div className={styles.cmt_user_date}>
              <span className={styles.comment_username}>levanlan</span>
              <span className={styles.comment_date}>{props.commentDate}</span>
						</div>
					</div>
				</div>
        <div className={styles.comment_content}>
          <p className={styles.comment_content_main }>{props.commentContent}</p>
				</div>
			</div>
		</div>
	);
}

export default CommentShow;
