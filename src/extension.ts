import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("jankyOpen.openPrompt", async () => {
      const workspace = vscode.workspace;
      const fs = workspace.fs;
      const textDocuments = workspace.textDocuments;
      const quickPick = vscode.window.createQuickPick();
      quickPick.items = [
        { label: vscode.workspace.name || "" },
        {
          label: (vscode.workspace.workspaceFolders || [])
            .map((folder) => folder.uri.fsPath)
            .join(","),
        },
        { label: "one", foo: { bar: 1 } } as vscode.QuickPickItem,
        { label: "two" },
      ].concat(
        textDocuments.map((doc) => {
          return { label: doc.fileName };
        })
      );
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
