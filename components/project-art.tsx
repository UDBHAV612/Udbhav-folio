import { Layers, Workflow, ChartNoAxesCombined } from "lucide-react";
export function ProjectArt({ visual }: { visual: string }) {
  return (
    <div className={`project-art ${visual}`} aria-hidden="true">
      <div className="art-grid" />
      {visual === "bakery" ? (
        <>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-icon">
            <Layers size={46} strokeWidth={1} />
          </div>
          <span className="art-label label-one">ORDERS</span>
          <span className="art-label label-two">INVENTORY</span>
          <span className="art-label label-three">INTELLIGENCE</span>
        </>
      ) : visual === "routing" ? (
        <>
          <div className="routing-line" />
          <div className="art-icon">
            <Workflow size={42} strokeWidth={1} />
          </div>
          <div className="route-nodes">
            <i />
            <i />
            <i />
          </div>
          <span className="art-bottom">CLASSIFY → ROUTE → TRACK</span>
        </>
      ) : (
        <>
          <div className="finance-bars">
            {[32, 50, 40, 66, 57, 83, 73, 100].map((v, i) => (
              <i key={i} style={{ height: `${v}%` }} />
            ))}
          </div>
          <div className="finance-icon">
            <ChartNoAxesCombined size={25} />
          </div>
          <span className="art-bottom">A CLEARER FINANCIAL PICTURE</span>
        </>
      )}
    </div>
  );
}
