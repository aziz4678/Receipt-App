import { Helmet } from "react-helmet";

export default function SEO({ title, description, image, url }) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="author" content="MyRecipes" />
      <meta name="keywords" content="recipes, cooking, food, easy meals, kitchen, healthy food" />

      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
