import * as vscode from 'vscode';
import * as path from 'path';

function getRootUri(): vscode.Uri | undefined {
  if (vscode.window.activeTextEditor) {
    return vscode.window.activeTextEditor.document.uri;
  }
  if (vscode.workspace) {
    const folders = vscode.workspace.workspaceFolders || [];
    if (folders.length) {
      return folders[0].uri;
    }
  }
  return undefined;
}

export default function getRootPath(): string | undefined {
  const uri = getRootUri();
  if (uri) {
    return path.dirname(uri.path) + path.sep;
  }
}
