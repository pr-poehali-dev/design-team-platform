
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EyeIcon, MessageSquareIcon } from "lucide-react";

type Project = {
  id: number;
  name: string;
  client: string;
  progress: number;
  status: "active" | "paused" | "completed";
  deadline: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Ребрендинг кафе 'Морошка'",
    client: "ООО Морошка",
    progress: 75,
    status: "active",
    deadline: "30 июня 2024",
  },
  {
    id: 2,
    name: "Дизайн упаковки 'Свежесть'",
    client: "ИП Иванов",
    progress: 45,
    status: "active",
    deadline: "15 июля 2024",
  },
  {
    id: 3,
    name: "Фирменный стиль 'ТехноАльянс'",
    client: "ТехноАльянс",
    progress: 30,
    status: "active",
    deadline: "10 августа 2024",
  },
  {
    id: 4,
    name: "Брендбук 'ЭкоДом'",
    client: "ЭкоДом",
    progress: 100,
    status: "completed",
    deadline: "05 мая 2024",
  },
  {
    id: 5,
    name: "Логотип 'Велосити'",
    client: "Велосити",
    progress: 20,
    status: "paused",
    deadline: "01 сентября 2024",
  },
];

type ProjectsOverviewProps = {
  showAll?: boolean;
};

export const ProjectsOverview = ({ showAll = false }: ProjectsOverviewProps) => {
  const displayProjects = showAll 
    ? projects 
    : projects.filter(p => p.status === "active");

  return (
    <div className="space-y-6">
      {displayProjects.length === 0 ? (
        <p className="text-center py-4 text-muted-foreground">Нет активных проектов</p>
      ) : (
        <div className="space-y-4">
          {displayProjects.map((project) => (
            <div 
              key={project.id} 
              className="border rounded-lg p-4 hover:bg-muted/20 transition-colors"
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-2 flex-grow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">{project.client}</p>
                    </div>
                    <Badge 
                      className={
                        project.status === "active" ? "bg-blue-500" : 
                        project.status === "completed" ? "bg-green-500" : 
                        "bg-yellow-500"
                      }
                    >
                      {project.status === "active" ? "В работе" : 
                       project.status === "completed" ? "Завершен" : 
                       "На паузе"}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-sm">
                      <span>Прогресс</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                  
                  <div className="text-sm">
                    <span className="text-muted-foreground">Срок: </span>
                    <span>{project.deadline}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 self-end md:self-center">
                  <Button variant="outline" size="sm">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    Просмотр
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquareIcon className="h-4 w-4 mr-1" />
                    Комментарии
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
