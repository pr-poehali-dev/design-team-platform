
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ProjectComments } from "@/components/ProjectComments";
import { ProjectStats } from "@/components/ProjectStats";
import { TeamMembers } from "@/components/TeamMembers";
import { ChevronLeftIcon, FileTextIcon, MessageSquareIcon, BarChart2Icon, UsersIcon } from "lucide-react";

// Демо-данные для проектов
const projects = [
  {
    id: 1,
    name: "Ребрендинг кафе 'Морошка'",
    client: "ООО Морошка",
    progress: 75,
    status: "active",
    deadline: "30 июня 2024",
    description: "Полный ребрендинг кафе 'Морошка', включая обновление логотипа, фирменного стиля, меню, интерьерных элементов и всех маркетинговых материалов.",
    briefUrl: "#",
    workStages: [
      { name: "Аналитика и исследование", completion: 100 },
      { name: "Разработка концепции", completion: 100 },
      { name: "Создание логотипа", completion: 90 },
      { name: "Фирменный стиль", completion: 70 },
      { name: "Элементы интерьера", completion: 40 },
      { name: "Дизайн меню", completion: 60 },
    ]
  },
  {
    id: 2,
    name: "Дизайн упаковки 'Свежесть'",
    client: "ИП Иванов",
    progress: 45,
    status: "active",
    deadline: "15 июля 2024",
    description: "Разработка дизайна экологичной упаковки для линейки натуральных молочных продуктов 'Свежесть'.",
    briefUrl: "#",
    workStages: [
      { name: "Анализ рынка", completion: 100 },
      { name: "Концепт-дизайн", completion: 80 },
      { name: "Итерации дизайна", completion: 60 },
      { name: "3D-визуализация", completion: 30 },
      { name: "Подготовка к печати", completion: 0 },
    ]
  },
  {
    id: 3,
    name: "Фирменный стиль 'ТехноАльянс'",
    client: "ТехноАльянс",
    progress: 30,
    status: "active",
    deadline: "10 августа 2024",
    description: "Создание современного фирменного стиля для IT-компании 'ТехноАльянс', специализирующейся на разработке программного обеспечения для промышленных предприятий.",
    briefUrl: "#",
    workStages: [
      { name: "Исследование бренда", completion: 100 },
      { name: "Разработка логотипа", completion: 60 },
      { name: "Цветовая схема", completion: 50 },
      { name: "Визуальные элементы", completion: 20 },
      { name: "Гайдлайны", completion: 0 },
      { name: "Набор шаблонов", completion: 0 },
    ]
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  
  const projectId = Number(id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="container mx-auto py-12 px-4">
        <Card className="text-center py-12">
          <CardContent>
            <p className="mb-4">Проект не найден</p>
            <Button onClick={() => navigate("/account")}>
              Вернуться в личный кабинет
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "active": return "bg-blue-500";
      case "completed": return "bg-green-500";
      case "paused": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active": return "В работе";
      case "completed": return "Завершен";
      case "paused": return "На паузе";
      default: return "Неизвестен";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto py-8 px-4 md:px-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/account")} 
          className="mb-6"
        >
          <ChevronLeftIcon className="h-4 w-4 mr-2" />
          Назад в личный кабинет
        </Button>

        {/* Заголовок проекта */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{project.name}</h1>
                <Badge className={getStatusBadgeClass(project.status)}>
                  {getStatusText(project.status)}
                </Badge>
              </div>
              <p className="text-muted-foreground">Клиент: {project.client}</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <FileTextIcon className="h-4 w-4 mr-2" />
                Бриф проекта
              </Button>
              <Button>
                Внести изменения
              </Button>
            </div>
          </div>

          <Card>
            <CardContent className="py-4">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="space-y-1 flex-grow">
                  <p className="text-sm text-muted-foreground">Общий прогресс</p>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">{project.progress}% выполнено</span>
                    <span className="text-sm">Срок: {project.deadline}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Вкладки */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-4 w-full max-w-xl">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <FileTextIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Обзор</span>
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex items-center gap-2">
              <BarChart2Icon className="h-4 w-4" />
              <span className="hidden sm:inline">Статистика</span>
            </TabsTrigger>
            <TabsTrigger value="comments" className="flex items-center gap-2">
              <MessageSquareIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Комментарии</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <UsersIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Команда</span>
            </TabsTrigger>
          </TabsList>

          {/* Содержимое вкладок */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>О проекте</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Сроки проекта</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium">Начало проекта</p>
                        <p className="text-sm">1 июня 2024</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm font-medium">Дедлайн</p>
                        <p className="text-sm">{project.deadline}</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm font-medium">Осталось дней</p>
                        <p className="text-sm">14 дней</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Этапы работы</CardTitle>
                <CardDescription>Прогресс по основным задачам проекта</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.workStages.map((stage, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{stage.name}</span>
                        <span className="text-sm">{stage.completion}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary" 
                          style={{ width: `${stage.completion}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="stats" className="mt-6">
            <ProjectStats projectId={projectId} />
          </TabsContent>
          
          <TabsContent value="comments" className="mt-6">
            <ProjectComments projectId={projectId} />
          </TabsContent>
          
          <TabsContent value="team" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Команда проекта</CardTitle>
                <CardDescription>Специалисты, работающие над проектом</CardDescription>
              </CardHeader>
              <CardContent>
                <TeamMembers />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectDetail;
