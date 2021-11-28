import Image from "next/image";
import { Card } from "react-bootstrap";

function ArticleItem({ articleDetails, cardType }) {
  const articleTags = cardType === "detailed" ? 10 : 3;

  return (
    <Card
      className={
        cardType === "detailed"
          ? "article-card article-card--detailed"
          : "article-card article-card--preview"
      }
    >
      <div className="article-top">
        <div className="article-extra-details">
          <div className="article-tags">
            {articleDetails.field_tags_export
              .slice(0, articleTags)
              .map((tag) => (
                <div className="article-tag" key={tag}>
                  {tag}
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
    </Card>
  );
}

export default ArticleItem;
