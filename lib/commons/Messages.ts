export class Messages {
  static getMessages(message: string, ...parameters: any[]) {
    let newMessage = message;
    parameters.forEach((param: any, index: number) => {
      newMessage = newMessage.split(`{${index}}`).join(param.toString());
    });
    return newMessage;
  }

  static MESSAGES = {
    ERROR_NETWORKING: '{0} is parameter',
  };
}
