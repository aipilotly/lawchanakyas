# Blog Posts Data

To add a new blog post:

1. Add a new entry to `blog-posts.json` with the following structure:
```json
{
  "slug": "your-post-slug",
  "title": "Your Post Title",
  "excerpt": "A brief excerpt that will appear on the blog listing page",
  "content": "Full markdown content here. Use ## for headings, ### for subheadings, and regular paragraphs.",
  "image": "/blog/your-image.jpg",
  "thumbnail": "/blog/your-image-thumb.jpg",
  "date": "YYYY-MM-DD",
  "author": "Author Name"
}
```

2. Upload your images to the `public/blog/` directory:
   - Full image: `your-image.jpg` (will be displayed on the post page)
   - Thumbnail: `your-image-thumb.jpg` (will be displayed on the blog listing page)

3. The slug will be used in the URL: `/blog/your-post-slug`

## Image Guidelines

- **Full Image**: Recommended size 1200x600px or larger, for display on the blog post page
- **Thumbnail**: Recommended size 400x250px, for display on the blog listing page
- Supported formats: JPG, PNG, WebP

## Content Formatting

The content field supports basic markdown:
- `## Heading` for main headings
- `### Subheading` for subheadings
- Regular paragraphs (separated by double newlines)
- Numbered lists (1. Item)
- Bullet lists (- Item or * Item)

