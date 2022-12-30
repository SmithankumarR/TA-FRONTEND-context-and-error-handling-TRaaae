import React from "react";
import { Link, withRouter } from "react-router-dom";
import articles from "./data/articles.json";
import HOC from "./Hoc/Hoc";
function Articles(props) {
  let filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(props.searchTerm)
  );
  return (
    <>
      <input
        placeholder="Search"
        className="search"
        value={props.searchTerm}
        onChange={props.handleChange}
      />
      <ul className="articles">
        {filteredArticles.map((article) => (
          <li>
            <Link to={"articles/" + article.slug}>
              <h3>{article.title}</h3>
            </Link>
            <small>{article.author}</small>
          </li>
        ))}
      </ul>
    </>
  );
}
const EnhancedArticles = HOC(Articles)
export default withRouter(EnhancedArticles);
