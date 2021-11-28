import { Container } from "react-bootstrap";
import ArticleItem from "../../components/ArticleItem";
import { fetchArticle } from "../../utils/requests";

function Article({ articleDetails }) {
  return (
    <Container>
      <ArticleItem articleDetails={articleDetails[0]} cardType="detailed" />
    </Container>
  );
}

export async function getServerSideProps(context) {
  const articleId = context.query.uuid;

  const articleDetails = await fetchArticle(articleId);

  return {
    props: {
      articleDetails: articleDetails,
    },
  };
}

export default Article;
