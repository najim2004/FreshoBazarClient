import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  Bookmark,
  Grid,
  Link2,
  MessageCircle,
  //   MoreVertical,
  Phone,
  Search,
  Settings,
  Video,
} from "lucide-react";

export const Chat: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full h-[calc(100vh-84px)] flex bg-white rounded-sm">
      {/* Left Sidebar */}
      <div className="w-20 bg-muted/50 border-r flex flex-col items-center py-4 gap-6">
        <div className="font-bold text-xl">SS</div>
        <nav className="flex flex-col gap-4">
          <Button variant="ghost" size="icon" className="rounded-lg">
            <Grid className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-lg">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-lg">
            <Bookmark className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-lg">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-lg">
            <Settings className="h-5 w-5" />
          </Button>
        </nav>
      </div>

      {/* Chat List */}
      <div className="w-72 border-r">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">
              ALL CHATS <span className="text-muted-foreground">(29)</span>
            </h2>
          </div>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="p-4 pt-0">
            <div className="font-medium text-sm text-muted-foreground mb-4">
              PINNED
            </div>
            {/* Chat items */}
            <div className="space-y-4">
              <ChatItem
                name="Bessie Cooper"
                avatar="/placeholder.svg"
                message="I have something to tell you"
                time="15:11"
              />
              <ChatItem
                name="Darrell"
                avatar="/placeholder.svg"
                message="The current situation 😈"
                time="14:15"
              />
              {/* Add more chat items as needed */}
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <span className="font-semibold">Designers</span>
            <span className="text-sm text-muted-foreground">9 members</span>
            <Button variant="outline" size="sm" className="ml-auto">
              + Invite Designers
            </Button>
          </div>
        </div>
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            <Message
              name="Robert Fox"
              avatar="/placeholder.svg"
              content="Let's vote for better option"
              time="02:32"
              reactions={[
                { emoji: "😂", count: 3 },
                { emoji: "😊", count: 2 },
                { emoji: "😍", count: 1 },
                { emoji: "😎", count: 3 },
              ]}
            />
            <Message
              name="Robert Fox"
              avatar="/placeholder.svg"
              content="Are you satisfied with this design option?"
              time="02:32"
            >
              <div className="mt-2 space-y-2">
                <div className="bg-accent/50 p-2 rounded">Satisfied</div>
                <div className="bg-accent/50 p-2 rounded">Not Satisfied</div>
                <Card className="p-4 mt-4 bg-background/95">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Not Satisfied</span>
                      <span>Satisfied</span>
                    </div>
                    <Progress value={40} className="h-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>60%</span>
                      <span>40%</span>
                    </div>
                  </div>
                </Card>
              </div>
            </Message>
          </div>
        </ScrollArea>
        <div className="p-4 border-t">
          <Input placeholder="Type a message..." className="w-full" />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 border-l p-4">
        <div className="flex flex-col items-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold mt-2">Designers</h3>
          <p className="text-sm text-muted-foreground">9 members</p>
          <div className="flex gap-4 mt-4">
            <Button variant="outline" size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Video className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-6">
          <Input placeholder="Search in Conversation" className="mb-4" />
          <div className="space-y-4">
            <Button variant="ghost" className="w-full justify-start">
              <Link2 className="h-4 w-4 mr-2" />
              Links
            </Button>
            {/* Add more options as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

function ChatItem({
  name,
  avatar,
  message,
  time,
}: {
  name: string;
  avatar: string;
  message: string;
  time: string;
}) {
  return (
    <div className="flex items-center gap-3 hover:bg-accent/50 p-2 rounded-lg cursor-pointer">
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1 overflow-hidden">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-muted-foreground truncate">{message}</div>
      </div>
      <div className="text-xs text-muted-foreground">{time}</div>
    </div>
  );
}

function Message({
  name,
  avatar,
  content,
  time,
  reactions,
  children,
}: {
  name: string;
  avatar: string;
  content: string;
  time: string;
  reactions?: Array<{ emoji: string; count: number }>;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{name}</span>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <p className="mt-1">{content}</p>
        {reactions && (
          <div className="flex gap-2 mt-2">
            {reactions.map((reaction, index) => (
              <div
                key={index}
                className="flex items-center gap-1 bg-accent/50 px-2 py-1 rounded-full text-sm"
              >
                <span>{reaction.emoji}</span>
                <span>{reaction.count}</span>
              </div>
            ))}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
