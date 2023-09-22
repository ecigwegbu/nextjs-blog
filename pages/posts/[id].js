import Date from '../../components/date';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths () {
    // return paths, a list of props containing the property params
    // paths === [ { params: {id: 'xyz'} }, ... ]
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // get the blog data for given [id] (params)
    const postData = await getPostData(params.id);
    // console.log('-->-->postData:', postData);
    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />    
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
      </Layout>
    );
  }