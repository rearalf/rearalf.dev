import React from 'react';
import { PostCard } from '../components/PostCard';
import { Layout } from '../components/Layout';
import { graphql } from 'gatsby';
import { SEO } from '../components/Seo';

export default function Home({ data }){
	const { edges } = data.allMarkdownRemark;
	return (
		<Layout>
			<SEO title="Home" description="Mí sitio Web" />
			<section className="listPost">
				{edges.map((edge, index) => {
					const { frontmatter, fields } = edge.node;
					return (
						<PostCard
							key={index}
							title={frontmatter.title}
							categories={frontmatter.categories}
							description={frontmatter.description}
							date={frontmatter.date}
							slug={fields.slug}
							img={frontmatter.image.childImageSharp.fluid.src}
						/>
					);
				})}
			</section>
		</Layout>
	);
}

export const Query = graphql`
	{
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						categories
						description
						image {
							childImageSharp {
								fluid(maxWidth: 600, quality: 100) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`;
