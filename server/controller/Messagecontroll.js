const Message = require("../modals/messageSchema");
const Chat = require("../modals/chatSchema");
const User = require("../modals/userSchema");

const allMessages = async (req, res) => {
  console.log(req.params.chatId + " is message routing CHATID");
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "name email")
      .populate("reciever")
      .populate("chat");
    res.json(messages);
  } catch (error) {
    res.status(400);
    console.log(error.message);
  }
};


const sendMessage = async (req, res) => {
  
  const { content, chatId } = req.body;
  // console.log(req.user._id + "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.status(400);
  }

  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);

   
    message = await message.populate("sender", "name");
    message = await message.populate("chat");
    message = await message.populate("reciever");
    message = await User.populate(message, {
      path: "chat.users",
      select: "name email",
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    await Chat.findByIdAndUpdate(chatId, { latestMessage: message });
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    res.json(message);
  } catch (error) {
    res.status(400);
    console.log(error.message);
  }
};

module.exports = { allMessages, sendMessage };