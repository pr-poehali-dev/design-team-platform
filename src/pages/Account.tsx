
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UserIcon, BriefcaseIcon, BarChart3Icon, MessageSquareIcon } from "lucide-react";
import { ProjectsOverview } from "@/components/ProjectsOverview";
import { ProjectsChart } from "@/components/ProjectsChart";
import { TeamMembers } from "@/components/TeamMembers";

const Account = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto py-8 px-4 md:px-8">
        {/* Профиль пользователя */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          <div className="flex-shrink-0">
            <Avatar className="h-24 w-24 border-4 border-white shadow-md">
              <AvatarImage src="/placeholder.svg" alt="Аватар пользователя" />
              <AvatarFallback className="text-xl">ДА</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold">Дмитрий Александров</h1>
                <p className="text-muted-foreground mt-1">Арт-директор</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline" className="bg-primary/10">Дизайнер</Badge>
                  <Badge variant="outline" className="bg-primary/10">Брендинг</Badge>
                </div>
              </div>
              <div className="flex gap-3 mt-4 md:mt-0">
                <Button variant="outline" size="sm">Редактировать профиль</Button>
                <Button size="sm">Создать проект</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Навигация */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-4 w-full max-w-xl">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3Icon className="h-4 w-4" />
              <span className="hidden sm:inline">Обзор</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <BriefcaseIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Проекты</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <UserIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Команда</span>
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquareIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Сообщения</span>
            </TabsTrigger>
          </TabsList>

          {/* Содержимое вкладок */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Статистика</CardTitle>
                  <CardDescription>Общий прогресс по проектам</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProjectsChart />
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Активные проекты</CardTitle>
                  <CardDescription>Текущие проекты в работе</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProjectsOverview />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Все проекты</CardTitle>
                <CardDescription>Список всех ваших проектов</CardDescription>
              </CardHeader>
              <CardContent>
                <ProjectsOverview showAll />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team">
            <Card>
              <CardHeader>
                <CardTitle>Моя команда</CardTitle>
                <CardDescription>Участники ваших проектов</CardDescription>
              </CardHeader>
              <CardContent>
                <TeamMembers />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Сообщения</CardTitle>
                <CardDescription>Коммуникация по проектам</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-muted-foreground">Нет непрочитанных сообщений</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;
