export default function richTextToMarkdown(nodes) {
  return nodes
    .map((node) => {
      switch (node.type) {
        case "paragraph":
          return (
            node.children.map((child) => child.text || "").join("") + "\n\n"
          );

        case "list":
          return (
            node.children
              .map((item) => {
                const text = item.children
                  .map((child) => child.text || "")
                  .join("");
                return `- ${text}`;
              })
              .join("\n") + "\n\n"
          );

        default:
          return "";
      }
    })
    .join("")
    .trim();
}
