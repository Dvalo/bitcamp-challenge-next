import DOMPurify from "isomorphic-dompurify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faUser,
  faCalendarAlt,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

function CommentItem({ comment }) {
  const cleanCommentBody = DOMPurify.sanitize(comment.comment_body);

  return (
    <div className="article-comment">
      <div className="comment-icon-wrapper">
        <FontAwesomeIcon icon={faCommentAlt} className="comment-icon" />
      </div>
      <div className="comment-content">
        <div className="comment-details">
          <div className="comment-details-left">
            <div className="comment-detail comment-author">
              <FontAwesomeIcon icon={faUser} className="comment-detail-icon" />
              {comment.uid}
            </div>
            <div className="comment-detail comment-date">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="comment-detail-icon"
              />
              {comment.created}
            </div>
          </div>
          <div className="comment-details-right">
            <div className="comment-detail comment-date">
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="comment-detail-icon"
              />
              {comment.changed}
            </div>
          </div>
        </div>
        <div
          className="comment-body"
          dangerouslySetInnerHTML={{ __html: cleanCommentBody }}
        />
      </div>
    </div>
  );
}

export default CommentItem;
