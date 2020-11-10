import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("jankyOpen.openPrompt", async () => {
      const quickPick = vscode.window.createQuickPick();
      quickPick.items = [
        { label: "one", foo: { bar: 1 } } as vscode.QuickPickItem,
        { label: "two" },
      ];
      quickPick.onDidChangeValue((value) => {
        console.log(value);
      });
      quickPick.onDidChangeSelection((selection) => {
        console.log(selection);
      });
      quickPick.onDidHide(() => quickPick.dispose());
      quickPick.show();
    })
  );
}

export function deactivate() {}
