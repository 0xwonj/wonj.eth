import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPostMetadata = (basePath, category = null) => {
  const folderPath = path.join(process.cwd(), 'posts', basePath);
  const files = fs.readdirSync(folderPath);
  const markdownPosts = files.filter(file => file.endsWith('.md'));

  const posts = markdownPosts.map(fileName => {
    const fileContents = fs.readFileSync(`${folderPath}/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    const metadata = {
      title: matterResult.data.title,
      slug: fileName.replace('.md', ''),
      category: matterResult.data.category,
      subcategory: matterResult.data.subcategory,
    };

    metadata.date = matterResult.data.date;
    metadata.subtitle = matterResult.data.subtitle;

    return metadata;
  });

  if (category) {
    if (category === 'etc') {
      return posts.filter(
        post =>
          post.category !== 'blockchain' && post.category !== 'computer-science'
      );
    } else {
      return posts.filter(post => post.category === category);
    }
  }

  return posts;
};

export default getPostMetadata;
