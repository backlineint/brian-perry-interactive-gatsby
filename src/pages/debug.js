import React from "react"
import { graphql } from "gatsby"

const Debug = ({ data }) => (
  <>
    <pre>{JSON.stringify(data, null, 4)}</pre>
    <p>Raw Markdown:</p>
    <p>{data.allNodeMarkdown.nodes[0].fields.markdownBody.childMarkdownRemark.rawMarkdownBody}</p>
    <p>Processed Markdown:</p>
    <p>{data.allNodeMarkdown.nodes[0].fields.markdownBody.childMarkdownRemark.html}</p>
    <div dangerouslySetInnerHTML={{ __html: data.allNodeMarkdown.nodes[0].fields.markdownBody.childMarkdownRemark.html }}></div>
  </>
)

export const query = graphql`
  {
    allNodeMarkdown {
      nodes {
        fields {
          markdownBody {
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
        }
      }
    }
  }
`

export default Debug