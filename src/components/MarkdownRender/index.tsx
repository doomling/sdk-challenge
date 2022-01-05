import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import "./style.css";

function MarkdownRender() {
  const [markdown, setMarkdown] = useState("");
  const params = useParams();

  useEffect(() => {
    function getContent() {
      import(`../../dependencies/${params.repo}/docs/${params["*"]}.md`).then(
        async (data) => {
          const md = await fetch(data.default);
          const mdData = await md.text();
          setMarkdown(mdData);
        }
      );
    }

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
      components={{
        code({ node, inline, className, children, ...props }) {
          return !inline ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              PreTag="div"
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdown && markdown}
    </ReactMarkdown>
  );
}

export default MarkdownRender;
