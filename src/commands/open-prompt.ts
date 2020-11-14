import * as vscode from 'vscode';
import getRootPath from '../lib/get-root-path';

export default async function openPrompt() {
  const workspace = vscode.workspace;
  const textDocuments = workspace.textDocuments;
  const quickPick = vscode.window.createQuickPick();
  const filler = [];
  for (let i = 0; i < 100; i++) {
    filler.push({ label: '' + (i + 1), alwaysShow: i < 3 });
  }
  quickPick.items = [
    { label: vscode.workspace.name || '', alwaysShow: true },
    {
      label: (vscode.workspace.workspaceFolders || [])
        .map((folder) => folder.uri.fsPath)
        .join(','),
      alwaysShow: true,
    },
    {
      label: '$(file:ts) one $(globe)',
      foo: { bar: 1 },
      alwaysShow: true,
    } as vscode.QuickPickItem,
    {
      label: 'two',
      description: 'desc',
      detail: 'detail $(add)',
      picked: true,
    },
    { label: getRootPath() || '' },
  ]
    .concat(
      textDocuments.map((doc) => {
        return { label: doc.fileName };
      })
    )
    .concat(filler);
  // .concat(new Array(100).map((_value, index) => ({ label: '' + index })));
  quickPick.onDidChangeValue((value) => {
    console.log(value);
  });
  quickPick.onDidChangeSelection((selection) => {
    console.log(selection);
  });
  quickPick.onDidHide(() => quickPick.dispose());
  quickPick.show();
}
