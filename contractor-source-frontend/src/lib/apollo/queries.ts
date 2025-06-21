import { gql } from '@apollo/client';

export const PRODUCT_FIELDS = gql`
  fragment ProductFields on Product {
    id
    databaseId
    name
    slug
    sku
    status
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts(
    $first: Int = 20
    $after: String
  ) {
    products(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ... on SimpleProduct {
            id
            databaseId
            name
            slug
            sku
            price
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            productCategories {
              nodes {
                name
                slug
              }
            }
          }
          ... on VariableProduct {
            id
            databaseId
            name
            slug
            sku
            price
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            productCategories {
              nodes {
                name
                slug
              }
            }
          }
          ... on ExternalProduct {
            id
            databaseId
            name
            slug
            sku
            price
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            productCategories {
              nodes {
                name
                slug
              }
            }
          }
          ... on GroupProduct {
            id
            databaseId
            name
            slug
            sku
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            productCategories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = gql`
  ${PRODUCT_FIELDS}
  query GetProductBySlug($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      ...ProductFields
      description
      shortDescription
      galleryImages {
        nodes {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      attributes {
        nodes {
          name
          options
        }
      }
    }
  }
`;

export const GET_PRODUCT_CATEGORIES = gql`
  query GetProductCategories {
    productCategories(first: 100, where: { hideEmpty: true }) {
      nodes {
        id
        name
        slug
        description
        count
        image {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export const GET_PAGE = gql`
  query GetPage($id: ID!, $idType: PageIdType = URI) {
    page(id: $id, idType: $idType) {
      id
      title
      content
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts($first: Int = 10, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;