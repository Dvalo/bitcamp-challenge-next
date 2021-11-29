import Head from "next/head";
import { Container } from "react-bootstrap";
import ArticleItem from "../../components/ArticleItem";
import { fetchArticle } from "../../utils/requests";

function Article({ articleDetails }) {
  return (
    <>
      <Head>
        <title>{articleDetails.title}</title>
      </Head>
      <Container>
        <ArticleItem articleDetails={articleDetails} cardType="detailed" />
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const articleId = context.query.uuid;

  const articleDetails = await fetchArticle(articleId);

  if (!articleDetails || !articleDetails.length) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      articleDetails: articleDetails[0],
    },
  };
}

export default Article;
