// "use client";
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleSellLicense = () => {
    const msg = this.createChatBotMessage(
      "To sell your license, use the 'Sell My Licenses' button above."
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, msg] }));
  };

  handleLicenseType = () => {
    const msg = this.createChatBotMessage(
      "We support licenses for major software like Adobe, Microsoft, and more."
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, msg] }));
  };

  handleUnknown = () => {
    const msg = this.createChatBotMessage(
      "I'm not sure I understood. Try asking about how to sell or license types."
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, msg] }));
  };
}

export default ActionProvider;
