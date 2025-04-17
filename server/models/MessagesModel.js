import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        requires: true,
    },
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        requires: false,
    },
    messageType:{
        type: String,
        enum: ["text", "file"],
        required: true,
    },
    content: {
        type: String,
        required: function() {
            return this.messageType === "text";
        }
    },
    fileUrl: {
        type: String,
        required: function() {
            return this.messageType === "file";
        }
    },
    timestamp: {
        type: Date,
        default: Date.now,
    }
})

const Message = mongoose.model("Messages", messagesSchema);

export default Message;