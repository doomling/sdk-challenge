import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import "./style.css";

function MarkdownRender() {
  const [markdown, setMarkdown] = useState("");
  const params = useParams();

  function getContent() {
    import(`../../dependencies/${params.repo}/docs/${params["*"]}`).then(
      async (data) => {
        const md = await fetch(data.default);
        const mdData = await md.text();
        setMarkdown(mdData);
      }
    );
  }

  useEffect(() => {
    getContent();
  }, [params]);

  const transformImageUri = (input: any) => {
    // not ideal but it's a start
    const formattedUrl = `https://raw.githubusercontent.com/decentraland/${params.repo}/master/docs/${input}`;
    return formattedUrl;
  };

  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm]]}
      transformImageUri={transformImageUri}
    >
      {markdown && markdown}
    </ReactMarkdown>
  );
}

export default MarkdownRender;
