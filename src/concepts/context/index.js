import StaticContextExample from "./StaticContext";
import DynamicContextExample from "./DynamicContext";
import UpdatingContextValueNested from "./UpdatingContextValueNested";

const ContextExamples = () => (
  <>
    <StaticContextExample />
    <hr />
    <DynamicContextExample />
    <hr />
    <UpdatingContextValueNested/>
  </>
);

export default ContextExamples;
