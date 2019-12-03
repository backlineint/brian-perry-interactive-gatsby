import React from 'react'
import { withKnobs, boolean } from "@storybook/addon-knobs";

import Layout from "./Layout"
import DrupalMarkdownPost from './DrupalMarkdownPost'

export default {
  title: 'Post Template',
  decorators: [withKnobs]
};

// Todo - come up with a slightly more accurate way to support Gatsby images.

const exampleMarkdown = `
<p><a href="#">New Year's resolution time!</a></p>
<p>Things felt a little different heading into 2019. I usually have a pretty good handle on what I want to accomplish in the upcoming year, along with a formal resolution. But this year, nothing. Initially that seemed terrifying, but the more I think about it, that openness and lack of expectation is an exciting resolution in and of itself.</p>
<p>Standing in my now <em>mostly</em> finished kitchen I also came up with another late breaking resolution. 2019 is going to be the year of intentional home improvements. Rather than letting a flood force me into it, I'm going to try to proactively decorate, improve and declutter. It is pleasantly (mostly) non-technical, and I can tackle it in tiny chunks throughout the year.</p>
<p>Wishing everyone a happy and productive 2019 full of dry kitchens.</p>
<div><p><em>Enter markdown here updated</em></p>
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

export const postTemplateBusiness = () => (
  <Layout>
    <DrupalMarkdownPost
      title="Intentional Home Improvements"
      fields={fields}
      business={boolean("Business", true)}
    />
  </Layout>
)

export const postTemplatePleasure = () => (
  <Layout>
    <DrupalMarkdownPost
      title="Example Markdown Post"
      fields={fields}
      business={boolean("Business", false)}
    />
  </Layout>
)