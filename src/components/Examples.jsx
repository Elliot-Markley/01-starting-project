import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
  const [tabContent, setTabContent] = useState();

  function handelSelect(selectedButton) {
    setTabContent(selectedButton);
  }

  let selectedContent = <p>Please select a topic.</p>;

  if (tabContent) {
    selectedContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={tabContent === "components"}
          onSelect={() => handelSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={tabContent === "jsx"}
          onSelect={() => handelSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={tabContent === "props"}
          onSelect={() => handelSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={tabContent === "state"}
          onSelect={() => handelSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {selectedContent}
    </section>
  );
}
