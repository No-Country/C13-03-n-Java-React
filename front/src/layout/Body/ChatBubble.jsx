function ChatBubble() {
  const getCurrentTime = () => {
    const date = new Date
    const hour = date.getHours()
    const minutes = date.getMinutes()

    const leadeingZeroHour = hour < 10 ? '0' + hour : hour
    const leadeingZeroMinutes = minutes < 10 ? '0' + minutes : minutes

    return `${leadeingZeroHour}:${leadeingZeroMinutes}`
  }
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="chat-header">
        Anakin &nbsp;
        <time className="text-xs opacity-50">
          { getCurrentTime() }
        </time>
      </div>
      <div className="chat-bubble">May I help you?</div>
    </div>
  )
}

export default ChatBubble