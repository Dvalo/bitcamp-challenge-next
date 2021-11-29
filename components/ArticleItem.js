import Image from "next/image";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCommentAlt } from "@fortawesome/free-solid-svg-icons";

function ArticleItem({ articleDetails, cardType }) {
  const articleTags = cardType === "detailed" ? 10 : 3;

  return (
    <Card
      className={
        cardType === "detailed"
          ? "main-card article-card article-card--detailed"
          : "main-card article-card article-card--preview"
      }
    >
      <div className="article-top">
        <div className="article-extra-details">
          <div className="article-tags">
            {articleDetails.field_tags_export
              .slice(0, articleTags)
              .map((tag) => (
                <div className="article-tag" key={tag}>
                  {tag.toLocaleLowerCase()}
                </div>
              ))}
          </div>
          <div className="article-date">
            {new Date(articleDetails.created).toDateString()}
          </div>
        </div>
        <div className="article-img">
          <Image
            src={`http://drupal.localhost:8000/${articleDetails.field_image}`}
            alt="article-image"
            layout="responsive"
            objectFit="cover"
            height={920}
            width={1920}
            priority={true}
          />
        </div>
      </div>
      <h4 className="article-title">{articleDetails.title}</h4>
      {cardType === "detailed" && (
        <div className="article-author">
          <small>by</small> <span>{articleDetails.uid}</span>
        </div>
      )}
      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: articleDetails.body }}
      />
      {cardType === "preview" && (
        <div className="article-footer">
          <div className="article-footer-detail article-author">
            <FontAwesomeIcon icon={faUser} className="article-icon" />
            {articleDetails.uid}
          </div>
          <div className="article-footer-detail article-comment-count">
            <FontAwesomeIcon icon={faCommentAlt} className="article-icon" />
            {articleDetails.comment_count}
          </div>
        </div>
      )}
    </Card>
  );
}

export default ArticleItem;
