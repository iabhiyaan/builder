import { createMutable } from "solid-js/store";

import RenderContent from "../../components/render-content/render-content.lite";
import BuilderContext from "../../context/builder.context";
import { getContent } from "../../functions/get-content/index.js";

function Symbol(props) {
  const state = createMutable({ className: "builder-symbol", content: null });

  const builderContext = useContext(BuilderContext);

  onMount(() => {
    state.content = props.symbol?.content;
  });

  return (
    <div
      class={state.className}
      {...props.attributes}
      dataSet={{
        class: state.className,
      }}
    >
      <RenderContent
        apiKey={builderContext.apiKey}
        context={builderContext.context}
        data={{
          ...props.symbol?.data,
          ...builderContext.state,
          ...props.symbol?.state.content?.data?.state,
        }}
        model={props.symbol?.model}
        content={state.content}
      ></RenderContent>
    </div>
  );
}

export default Symbol;
