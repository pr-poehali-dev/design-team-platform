
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  XAxis, 
  YAxis, 
  Bar, 
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
} from "recharts";

type StatsData = {
  id: number;
  name: string;
  tasks: {
    completed: number;
    total: number;
  };
  timeline: {
    planned: number;
    actual: number;
  };
  revisions: number;
  qualityScore: number;
  timelineData: Array<{
    day: string;
    planned: number;
    actual: number;
  }>;
};

// Демо-данные для статистики
const projectStatsData: Record<number, StatsData> = {
  1: {
    id: 1,
    name: "Ребрендинг кафе 'Морошка'",
    tasks: {
      completed: 15,
      total: 20,
    },
    timeline: {
      planned: 30,
      actual: 32,
    },
    revisions: 3,
    qualityScore: 92,
    timelineData: [
      { day: "1 июня", planned: 10, actual: 8 },
      { day: "10 июня", planned: 30, actual: 25 },
      { day: "20 июня", planned: 60, actual: 55 },
      { day: "Сегодня", planned: 75, actual: 75 },
      { day: "30 июня", planned: 100, actual: null },
    ],
  },
  2: {
    id: 2,
    name: "Дизайн упаковки 'Свежесть'",
    tasks: {
      completed: 9,
      total: 20,
    },
    timeline: {
      planned: 45,
      actual: 40,
    },
    revisions: 1,
    qualityScore: 88,
    timelineData: [
      { day: "1 июня", planned: 5, actual: 5 },
      { day: "15 июня", planned: 20, actual: 15 },
      { day: "Сегодня", planned: 45, actual: 40 },
      { day: "30 июня", planned: 70, actual: null },
      { day: "15 июля", planned: 100, actual: null },
    ],
  },
  3: {
    id: 3,
    name: "Фирменный стиль 'ТехноАльянс'",
    tasks: {
      completed: 6,
      total: 20,
    },
    timeline: {
      planned: 25,
      actual: 30,
    },
    revisions: 2,
    qualityScore: 85,
    timelineData: [
      { day: "15 июня", planned: 10, actual: 8 },
      { day: "Сегодня", planned: 25, actual: 30 },
      { day: "15 июля", planned: 60, actual: null },
      { day: "10 августа", planned: 100, actual: null },
    ],
  },
};

type ProjectStatsProps = {
  projectId: number;
};

export const ProjectStats = ({ projectId }: ProjectStatsProps) => {
  const stats = projectStatsData[projectId];
  
  if (!stats) {
    return <p>Статистика по проекту не найдена</p>;
  }

  const taskCompletion = Math.round((stats.tasks.completed / stats.tasks.total) * 100);
  const timelineEfficiency = stats.timeline.actual <= stats.timeline.planned 
    ? 100 
    : Math.round((stats.timeline.planned / stats.timeline.actual) * 100);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Показатели проекта</CardTitle>
          <CardDescription>
            Основные метрики и прогресс
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Выполнение задач</p>
              <div className="flex justify-between text-sm">
                <span>{stats.tasks.completed} из {stats.tasks.total}</span>
                <span className="font-medium">{taskCompletion}%</span>
              </div>
              <Progress value={taskCompletion} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Эффективность по срокам</p>
              <div className="flex justify-between text-sm">
                <span>{stats.timeline.actual} / {stats.timeline.planned} дней</span>
                <span className="font-medium">{timelineEfficiency}%</span>
              </div>
              <Progress value={timelineEfficiency} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Оценка качества</p>
              <div className="flex justify-between text-sm">
                <span>Отлично</span>
                <span className="font-medium">{stats.qualityScore}/100</span>
              </div>
              <Progress value={stats.qualityScore} className="h-2" />
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2">Количество правок: {stats.revisions}</h4>
            <div className="h-[60px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[{name: "Правки", value: stats.revisions}]}>
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 5]} />
                  <Bar dataKey="value" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>График выполнения проекта</CardTitle>
          <CardDescription>
            Сравнение планового и фактического прогресса
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stats.timelineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                <Tooltip 
                  formatter={(value) => [`${value}%`, value === null ? 'Не доступно' : 'Прогресс']} 
                  labelFormatter={(label) => `Дата: ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="planned" 
                  stroke="#9b87f5" 
                  strokeWidth={2} 
                  name="Плановый" 
                  activeDot={{ r: 8 }}
                  connectNulls
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#36d399" 
                  strokeWidth={2} 
                  name="Фактический" 
                  activeDot={{ r: 8 }}
                  connectNulls
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
