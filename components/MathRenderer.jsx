const MathRenderer = ({ text }) => {
  return <span dangerouslySetInnerHTML={{ __html: text }}></span>;
};

export default MathRenderer;
