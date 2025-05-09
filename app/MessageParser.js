// "use client";
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("sell")) {
      this.actionProvider.handleSellLicense();
    } else if (lower.includes("license type")) {
      this.actionProvider.handleLicenseType();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;
