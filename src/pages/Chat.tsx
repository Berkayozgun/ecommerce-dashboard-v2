import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Search, MoreVertical, Phone, Video } from "lucide-react"

const contacts = [
  { id: 1, name: "Ahmet Yılmaz", status: "Online", avatar: "https://avatar.vercel.sh/ahmet.png" },
  { id: 2, name: "Mehmet Demir", status: "Away", avatar: "https://avatar.vercel.sh/mehmet.png" },
  { id: 3, name: "Ayşe Kaya", status: "Offline", avatar: "https://avatar.vercel.sh/ayse.png" },
  { id: 4, name: "Fatma Çelik", status: "Online", avatar: "https://avatar.vercel.sh/fatma.png" },
]

export function Chat() {
  const [messages, setMessages] = React.useState([
    { text: "Hello! How can I help you today?", sender: "Admin", time: "10:00 AM" },
    { text: "I have a question about my recent order.", sender: "You", time: "10:05 AM" },
  ]);
  const [input, setInput] = React.useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, {
        text: input,
        sender: 'You',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setInput('');
    }
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Support Chat</h2>
          <p className="text-muted-foreground">Direct communication channel with your team and clients.</p>
        </div>
      </div>

      <div className="flex-1 flex gap-4 overflow-hidden">
        {/* Sidebar */}
        <Card className="w-80 hidden lg:flex flex-col">
          <CardHeader className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search contacts..." className="pl-8" />
            </div>
          </CardHeader>
          <CardContent className="p-0 overflow-auto">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center gap-3 p-4 hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={contact.avatar} />
                    <AvatarFallback>{contact.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className={`absolute bottom - 0 right - 0 h - 3 w - 3 rounded - full border - 2 border - background ${contact.status === "Online" ? "bg-green-500" : contact.status === "Away" ? "bg-yellow-500" : "bg-gray-500"
                    } `} />
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{contact.name}</span>
                    <span className="text-[10px] text-muted-foreground">12:30 PM</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">Last message snippet goes here...</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Main Chat Area */}
        <Card className="flex-1 flex flex-col min-w-0">
          <CardHeader className="p-4 border-b flex flex-row justify-between items-center space-y-0">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://avatar.vercel.sh/ahmet.png" />
                <AvatarFallback>AY</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-sm">Ahmet Yılmaz</CardTitle>
                <CardDescription className="text-xs">Online</CardDescription>
              </div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon"><Phone className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Video className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'} `}>
                <div className={`max - w - [70 %] p - 3 rounded - 2xl text - sm ${message.sender === 'You'
                    ? 'bg-primary text-primary-foreground rounded-tr-none'
                    : 'bg-muted rounded-tl-none'
                  } `}>
                  <p>{message.text}</p>
                  <p className={`text - [10px] mt - 1 ${message.sender === 'You' ? 'text-primary-foreground/70' : 'text-muted-foreground'} `}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Chat;
