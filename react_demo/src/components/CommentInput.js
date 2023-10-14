import styles from './CommentInput.module.css';
import avatarImg from '../images/user-avatar.png';

function CommentInput() {
  return (
    <div className={styles.comment_box}>
      <div className={styles.comment_box_container}>
        <img className={styles.user_avatar_cmt} alt="avatar" src={avatarImg} />
        <form className={styles.form_container}>
          <textarea className={styles.comment} name="comment" placeholder="Note your cooking journey here"></textarea>
      </form>

    </div>
      <div className={styles.button_container}>
        <button type="submit" className={styles.submit_btn}>Comment</button>
        <button type="cancel" className={styles.cancel_btn}>Cancel</button>
    </div>

  </div>
  );
};

export default CommentInput;