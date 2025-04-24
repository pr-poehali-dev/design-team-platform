
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { 
  Bar, 
  BarChart, 
  Cell, 
  Pie, 
  PieChart, 
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts";

const projectStatusData = [
  { name: "Завершено", value: 4, color: "hsl(143, 85%, 40%)" },
  { name: "В работе", value: 3, color: "hsl(213, 90%, 55%)" },
  { name: "На паузе", value: 1, color: "hsl(33, 90%, 55%)" },
];

const projectProgressData = [
  { name: "Логотип", progress: 75 },
  { name: "Брендбук", progress: 45 },
  { name: "Упаковка", progress: 30 },
  { name: "Веб-сайт", progress: 60 },
];

const config = {
  status: {
    label: "Статус проектов",
    color: "#8884d8"
  },
  progress: {
    label: "Прогресс по типам работ",
    color: "#9b87f5"
  }
};

export const ProjectsChart = () => {
  return (
    <div className="space-y-8">
      <div className="h-[200px]">
        <h3 className="text-sm font-medium mb-2">Статус проектов</h3>
        <ChartContainer config={config}>
          <PieChart>
            <Pie
              data={projectStatusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={40}
              paddingAngle={2}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {projectStatusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip 
              content={({ active, payload }) => 
                active && payload && payload.length ? (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="flex flex-col">
                      <span className="font-medium">{payload[0].name}</span>
                      <span>{payload[0].value} проектов</span>
                    </div>
                  </div>
                ) : null
              } 
            />
          </PieChart>
        </ChartContainer>
      </div>

      <div className="h-[200px]">
        <h3 className="text-sm font-medium mb-2">Прогресс по типам работ (%)</h3>
        <ChartContainer config={config}>
          <BarChart data={projectProgressData}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Bar
              dataKey="progress"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
            />
            <ChartTooltip
              content={({ active, payload, label }) =>
                active && payload && payload.length ? (
                  <ChartTooltipContent
                    content={(
                      <div className="flex flex-col gap-1">
                        <span className="font-medium">{label}</span>
                        <span className="text-xs text-muted-foreground">
                          Прогресс: {payload[0].value}%
                        </span>
                      </div>
                    )}
                  />
                ) : null
              }
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};
