
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { SendIcon, SmileIcon, PaperclipIcon } from "lucide-react";

type Comment = {
  id: number;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  timestamp: string;
  isClient: boolean;
};

type ProjectCommentsProps = {
  projectId: number;
};

const demoComments: Record<number, Comment[]> = {
  1: [
    {
      id: 1,
      author: {
        name: "Елена Соколова",
        avatar: "/placeholder.svg",
        role: "Клиент",
      },
      content: "Хотелось бы изменить оттенок основного цвета на более тёплый. Текущий вариант кажется слишком холодным для нашей концепции кафе.",
      timestamp: "Вчера, 15:42",
      isClient: true,
    },
    {
      id: 2,
      author: {
        name: "Дмитрий Александров",
        avatar: "/placeholder.svg",
        role: "Арт-директор",
      },
      content: "Спасибо за обратную связь! Подготовлю несколько вариантов с более тёплыми оттенками. Пришлю на согласование завтра до обеда.",
      timestamp: "Вчера, 16:30",
      isClient: false,
    },
  ],
  2: [
    {
      id: 1,
      author: {
        name: "Иван Петров",
        avatar: "/placeholder.svg",
        role: "Клиент",
      },
      content: "Очень нравится прогресс по упаковке! Возможно стоит добавить больше зелёных элементов для подчёркивания натуральности продукта?",
      timestamp: "3 дня назад",
      isClient: true,
    },
  ],
  3: []
};

export const ProjectComments = ({ projectId }: ProjectCommentsProps) => {
  const [newComment, setNewComment] = useState("");
  const comments = demoComments[projectId] || [];

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // В реальном приложении здесь был бы API-запрос для сохранения комментария
      console.log("Отправка комментария:", newComment);
      setNewComment("");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Комментарии к проекту</CardTitle>
        <CardDescription>
          Обсуждение хода работы и внесение правок
        </CardDescription>
      </CardHeader>
      <CardContent>
        {comments.length > 0 ? (
          <div className="space-y-4 mb-6">
            {comments.map((comment) => (
              <div 
                key={comment.id} 
                className={`flex gap-3 p-3 rounded-lg ${
                  comment.isClient ? "bg-primary/5" : "bg-muted"
                }`}
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={comment.author.avatar} />
                  <AvatarFallback>{comment.author.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-sm">{comment.author.name}</p>
                      <p className="text-xs text-muted-foreground">{comment.author.role}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                  </div>
                  <p className="mt-2 text-sm">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-6 text-muted-foreground">Комментариев пока нет</p>
        )}
        
        <div className="mt-4">
          <Textarea
            placeholder="Напишите комментарий..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-2 min-h-24"
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" type="button">
                <PaperclipIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" type="button">
                <SmileIcon className="h-4 w-4" />
              </Button>
            </div>
            <Button 
              onClick={handleSubmitComment} 
              disabled={!newComment.trim()}
              className="flex items-center gap-1"
            >
              <SendIcon className="h-4 w-4" />
              Отправить
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
