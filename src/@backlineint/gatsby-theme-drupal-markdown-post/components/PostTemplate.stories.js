import React from 'react'
import Layout from "./Layout"
import DrupalMarkdownPost from './DrupalMarkdownPost'

export default {
  title: 'Post Template',
};

const exampleMarkdown = `<div><p><em>Enter markdown here updated</em></p>
<h1>Heading</h1>
<ul>
<li>List</li>
<li>List 2</li>
</ul>
<span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-left: auto; margin-right: auto;  max-width: 666px;">
      <a class="gatsby-resp-image-link" href="/static/f2c5bfbbb172afc09628a4af711db6d6/1478c/advisor-rich_5.png" style="display: block" target="_blank" rel="noopener">
    <span class="gatsby-resp-image-background-image" style="padding-bottom: 27.9279%; position: relative; bottom: 0px; left: 0px; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABUUlEQVQY01WRvUsDQRTE72+LhZUElBR+FBqxEsEiRRrFIoKolUK62IoWImITsZCklWApiB+Y3F0Sw90lF3O3l9v9uTlijA+GXd7OmzfMGpXqA+W7MrXaI77fw/M8XM/FcRw81yWOY5RS+hwSDL4JggARhkSRSO79vo8QIuFIKTHy2Qy7a/Pk8zkanx+8vjzjdNq0rAZmo64HI0YVRUNsu03TtrAti/f3NzqdL23A1cKDhDMSNU5yG1SKBfYLe1i9mEY3xupD3WdSSkMOfRz7CdO0abea+N0uSrv/ZSjtbgRjdXGZ04MipbMSoX73haIbSrxAEmtCQtaKSgqkaBOGgnDs+neZ+tuNMZuaYSmd4ej4cIoy5U4xzmeqr7OU5gfS/kS1TFSniWrWExiXF+fc3lxTrVYmOUzjX09/zKji+yvCbAqxvYDIryB21hGbc4itND8587UWKrMj+gAAAABJRU5ErkJggg==&quot;); background-size: cover; display: block; transition: opacity 0.5s ease 0.5s; opacity: 0;"></span>
  <img class="gatsby-resp-image-image" alt="Rich" title="Rich" src="/static/f2c5bfbbb172afc09628a4af711db6d6/1478c/advisor-rich_5.png" srcset="/static/f2c5bfbbb172afc09628a4af711db6d6/4ca17/advisor-rich_5.png 270w,
/static/f2c5bfbbb172afc09628a4af711db6d6/22492/advisor-rich_5.png 540w,
/static/f2c5bfbbb172afc09628a4af711db6d6/1478c/advisor-rich_5.png 666w" sizes="(max-width: 666px) 100vw, 666px" loading="lazy" style="opacity: 1; transition: opacity 0.5s ease 0s; color: inherit; box-shadow: white 0px 0px 0px 400px inset;">
  </a>
    </span></div>`;

const fields = {
  markdownBody: {
    childMarkdownRemark: {
      html: exampleMarkdown
    }
  }
}

export const defaultPostTemplate = () => (
  <Layout>
    <DrupalMarkdownPost
      title="Example Markdown Post"
      fields={fields}
    />
  </Layout>
)