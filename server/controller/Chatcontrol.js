// const Char = require("../modals/chatSchema");
// const User = require("../modals/userSchema");
// const accesschat = async(req,res)=>{}

// const asyncHandler = require("express-async-handler");
 const Chat = require("../modals/chatSchema");
const User = require("../modals/userSchema");

const accessChat = async (req, res) => {
  // console.log("Welcome to ROUTE page");
  const {userId}  = req.body;
  console.log(userId + "from getResponse for sidebaar");
  console.log(req.user._id + "from getResponse for sidebaar");
  
  if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");
    console.log("Returning after click--------------------------------------------------------------------");
    console.log(isChat );

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).json(FullChat);
    } catch (error) {
      res.status(400);
      
    }
  }
};

const fetchChats = async (req, res) => {
  try {
  const dundh =  await Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name email",
        });
        console.log("------------------------------------------------------------------------------- sidebar");
        console.log(results[0].users);
        res.status(200).send(results);
        
      });
      
      
      
  } catch (error) {
    res.status(400);
    
  }
};



module.exports = {
  accessChat,
  fetchChats,

};