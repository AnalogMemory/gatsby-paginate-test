import React, { Component } from "react"
import Link from "gatsby-link";

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

class IndexPage extends Component {
  render() {
    console.log(this.props);
    const data = this.props.data.allWordpressPost.edges
    const { group, index, first, last, pageCount } = this.props.pathContext
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString()
    const nextUrl = (index + 1).toString()

    return (
      <div>
        <h1>Posts</h1>
        {group.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.slug}>
              <h3 dangerouslySetInnerHTML={{ __html: node.title }} />
            </Link>
          </div>
        ))}
        <div className="previousLink">
          <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
        </div>
        <div className="nextLink">
          <NavLink test={last} url={nextUrl} text="Go to Next Page" />
        </div>
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query homePageQuery {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          id
          slug
        }
      }
    }
  }
`
