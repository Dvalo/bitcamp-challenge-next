import Head from "next/head";
import { Card, Container } from "react-bootstrap";
import ArticleItem from "../../components/ArticleItem";
import CommentItem from "../../components/CommentItem";
import { fetchArticle, fetchArticleComments } from "../../utils/requests";

function Article({ articleDetails, articleComments }) {
  return (
    <>
      <Head>
        <title>{articleDetails.title}</title>
      </Head>
      <Container>
        <ArticleItem articleDetails={articleDetails} cardType="detailed" />
        <Card className="main-card mt-5">
          {!articleComments || !articleComments.length ? (
            <h1>No comments</h1>
          ) : (
            <>
              <h1>Comments</h1>
              {articleComments.map((comment) => (
                <CommentItem comment={comment} key={comment.comment_uuid} />
              ))}
            </>
          )}
        </Card>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const articleId = context.query.uuid;

  const articleDetails = await fetchArticle(articleId);
  const articleComments = await fetchArticleComments(articleId);

  if (!articleDetails || !articleDetails.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articleDetails: articleDetails[0],
      articleComments: articleComments,
    },
  };
}

export default Article;
