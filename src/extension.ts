import * as vscode from 'vscode';
import openPrompt from './commands/open-prompt';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('jankyOpen.openPrompt', openPrompt)
  );
}

export function deactivate() {}
