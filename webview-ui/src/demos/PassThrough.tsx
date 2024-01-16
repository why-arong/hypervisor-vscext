import { VSCodeTextField } from "@vscode/webview-ui-toolkit/react";

export function PassThrough() {
  return (
    <section className="component-container">
      <section className="component-example">
        <VSCodeTextField className="passthrough-info" placeholder="Line 1">
          Entry
        </VSCodeTextField>
        <VSCodeTextField className="passthrough-info" placeholder="2">
          Vcpu
        </VSCodeTextField>
      </section>
    </section>
  );
}
