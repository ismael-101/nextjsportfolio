"use client";

const ToolsSlide = ({ tools }: { tools: string[] }) => {
  let toolItems = tools.map((tool, index) => <span key={index}>{tool}</span>);

  return (
    <>
      <div className="Body">
        <div
          className="scroll"
          style={
            {
              "--t": "70s",
              "--n11": "-100%",
              "--n12": "100%",
              "--n21": "-200%",
              "--n22": "0",
            } as any
          }
        >
          <div>{toolItems}</div>
          <div>{toolItems}</div>
          <div>{toolItems}</div>
          <div>{toolItems}</div>
        </div>
      </div>
    </>
  );
};
export default ToolsSlide;
