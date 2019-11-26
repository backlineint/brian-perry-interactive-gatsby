import React from 'react'
import DrupalMarkdownPost from './DrupalMarkdownPost'

export default {
  title: 'Drupal Markdown Post',
};

const exampleMarkdown = `<div><p><em>Enter markdown here updated</em></p>
<h1>Heading</h1>
<ul>
<li>List</li>
<li>List 2</li>
</ul>
<span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-left: auto; margin-right: auto;  max-width: 666px;">
      <a class="gatsby-resp-image-link" href="advisor-rich.png" style="display: block" target="_blank" rel="noopener">
  <img class="gatsby-resp-image-image" alt="Rich" title="Rich" src="advisor-rich.png" srcset="advisor-rich.png 270w,
advisor-rich.png 540w,
advisor-rich.png 666w" sizes="(max-width: 666px) 100vw, 666px" loading="lazy" style="opacity: 1; transition: opacity 0.5s ease 0s; color: inherit; box-shadow: white 0px 0px 0px 400px inset;">
  </a>
    </span></div>`;

const fields = {
  markdownBody: {
    childMarkdownRemark: {
      html: exampleMarkdown
    }
  }
}

export const defaultDrupalMarkdownPost = () => (
  <DrupalMarkdownPost 
    title="Example Markdown Post"
    fields={fields}
  />
)