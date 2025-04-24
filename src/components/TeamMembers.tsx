
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquareIcon } from "lucide-react";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  online: boolean;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Екатерина Смирнова",
    role: "Графический дизайнер",
    avatar: "/placeholder.svg",
    skills: ["Логотипы", "Брендбук"],
    online: true,
  },
  {
    id: 2,
    name: "Алексей Петров",
    role: "3D визуализатор",
    avatar: "/placeholder.svg",
    skills: ["3D модели", "Рендеринг"],
    online: false,
  },
  {
    id: 3,
    name: "Марина Иванова",
    role: "Креативный директор",
    avatar: "/placeholder.svg",
    skills: ["Стратегия", "Концепция"],
    online: true,
  },
];

export const TeamMembers = () => {
  return (
    <div className="space-y-4">
      {teamMembers.map((member) => (
        <div 
          key={member.id} 
          className="flex items-center justify-between gap-4 border rounded-lg p-4 hover:bg-muted/20 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar>
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              {member.online && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
              )}
            </div>
            
            <div>
              <h3 className="font-medium">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <div className="flex gap-2 mt-1">
                {member.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <Button variant="ghost" size="sm">
            <MessageSquareIcon className="h-4 w-4 mr-1" />
            Написать
          </Button>
        </div>
      ))}
      
      <Button variant="outline" className="w-full mt-4">
        Добавить участника
      </Button>
    </div>
  );
};
