import Head from "next/head";
import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";
import ArticleItem from "../components/ArticleItem";
import { fetchAvailableArticles } from "../utils/requests";

function Home({ availableArticles }) {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <Container>
        <Row>
          {(!availableArticles || !availableArticles.length) ? (
            <h1 className="text-center">No articles found</h1>
          ) : (
            availableArticles.map((article) => (
              <Col
                xs={12}
                lg={6}
                xl={4}
                key={article.uuid}
                className="article-item"
              >
                <Link href={`/article/${article.uuid}`}>
                  <a className="article">
                    <ArticleItem articleDetails={article} cardType="preview" />
                  </a>
                </Link>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const availableArticles = await fetchAvailableArticles();

  return {
    props: {
      availableArticles: availableArticles,
    },
  };
}

export default Home;
