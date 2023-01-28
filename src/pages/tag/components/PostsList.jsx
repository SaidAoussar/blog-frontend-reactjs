import { useCallback, useRef, useState } from "react";
import useBlogs from "../hooks/useBlogs";
import PreviewPost from "../../../components/preview-post/PreviewPost";

const PostsList = ({ tagId }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, posts, hasMore } = useBlogs(pageNumber, tagId);

  const observer = useRef();

  const lastElementPostRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        console.log("hi");
        console.log("entries[0].isIntersecting : ", entries[0].isIntersecting);
        console.log("hasMore : ", hasMore);

        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <div>
      {posts.map((post, index) => {
        if (posts.length === index + 1) {
          return (
            <PreviewPost key={post.id} ref={lastElementPostRef} post={post} />
          );
        } else {
          return <PreviewPost key={post.id} post={post} />;
        }
      })}
    </div>
  );
};

export default PostsList;
