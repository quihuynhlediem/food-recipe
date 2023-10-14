import CommentInput from './CommentInput';
import CommentShow from './CommentShow';

function Comment() {
  let commentData = (localStorage.getItem("commentData") === null) ? [] : JSON.parse(localStorage.getItem("commentData"));

  return (
    <div>
      <CommentInput />
      {commentData.map((comment, index) => (
        <CommentShow commentDate={comment.date} commentContent={comment.content} key={index}/>
      ))}
    </div>
  );
}

export default Comment;