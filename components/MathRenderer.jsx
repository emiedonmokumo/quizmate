
import katex from 'katex';

const MathRenderer = ({ text }) => {
//   const html = katex.renderToString(text, {
//     throwOnError: false,
//   });

  return <span dangerouslySetInnerHTML={{ __html: text }}></span>;
};

export default MathRenderer;
