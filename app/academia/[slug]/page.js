import getPostMetadata from '@/components/getPostMetadata';
import MarkdownPage from '@/components/MarkdownPage';

export const generateStaticParams = async () => {
  const posts = getPostMetadata('posts/academia');
  return posts.map(post => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params?.slug ? ' ⋅ ' + params?.slug : '';
  return {
    title: `Wonj ⋅ Academia${id.replaceAll('_', ' ')}`,
  };
}

const PostPage = props => {
  const slug = props.params.slug;
  const folder = 'posts/academia';
  const backLink = '/academia/';
  const titleColor = 'purple';

  return (
    <MarkdownPage
      folder={folder}
      slug={slug}
      backLink={backLink}
      titleColor={titleColor}
    />
  );
};

export default PostPage;
