import About from "./About";
import ArticleList from "./ArticleList";
import { posts } from "../data/posts";

export default function App() {
  return (
    <div className="App">
      <About />
      <ArticleList posts={posts} />
    </div>
  );
}
