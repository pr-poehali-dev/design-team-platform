
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  FileText, 
  Image, 
  Palette, 
  PenTool, 
  Target, 
  Users 
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  // Шаг 1: Основная информация
  projectName: z.string().min(3, { message: "Название проекта должно содержать не менее 3 символов" }),
  companyName: z.string().min(2, { message: "Название компании должно содержать не менее 2 символов" }),
  industry: z.string().min(1, { message: "Выберите отрасль" }),
  projectType: z.string().min(1, { message: "Выберите тип проекта" }),
  
  // Шаг 2: Цели и аудитория
  projectGoals: z.string().min(10, { message: "Опишите цели проекта (минимум 10 символов)" }),
  targetAudience: z.string().min(10, { message: "Опишите целевую аудиторию (минимум 10 символов)" }),
  competitors: z.string().optional(),
  
  // Шаг 3: Стилистика и дизайн
  designStyle: z.array(z.string()).min(1, { message: "Выберите хотя бы один стиль дизайна" }),
  colorPreferences: z.string().optional(),
  moodDescription: z.string().min(10, { message: "Опишите настроение бренда (минимум 10 символов)" }),
  
  // Шаг 4: Требования и сроки
  deliverables: z.array(z.string()).min(1, { message: "Выберите хотя бы один тип материалов" }),
  deadline: z.string().min(1, { message: "Укажите желаемые сроки" }),
  budget: z.string().min(1, { message: "Укажите бюджет" }),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CreateBrief = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      companyName: "",
      industry: "",
      projectType: "",
      projectGoals: "",
      targetAudience: "",
      competitors: "",
      designStyle: [],
      colorPreferences: "",
      moodDescription: "",
      deliverables: [],
      deadline: "",
      budget: "",
      additionalInfo: "",
    },
  });

  const totalSteps = 4;
  
  const nextStep = async () => {
    const fieldsToValidate = getFieldsToValidate(step);
    const isValid = await form.trigger(fieldsToValidate as any);
    
    if (isValid) {
      setStep(prev => Math.min(prev + 1, totalSteps));
    }
  };
  
  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };
  
  const getFieldsToValidate = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return ["projectName", "companyName", "industry", "projectType"];
      case 2:
        return ["projectGoals", "targetAudience"];
      case 3:
        return ["designStyle", "moodDescription"];
      case 4:
        return ["deliverables", "deadline", "budget"];
      default:
        return [];
    }
  };
  
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Здесь будет отправка данных на сервер
    console.log("Form submitted:", data);
    
    // Имитация отправки на сервер
    setTimeout(() => {
      setIsSubmitting(false);
      // Редирект на страницу успешной отправки
      window.location.href = "/account";
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Навигация */}
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="font-bold text-xl text-primary">
              DA\LI
            </Link>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              Брендинговое агентство
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm hover:text-primary transition-colors">Главная</Link>
            <Link to="/account" className="text-sm hover:text-primary transition-colors">Личный кабинет</Link>
          </nav>
        </div>
      </header>
      
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Вернуться на главную
          </Link>
          
          <h1 className="text-3xl font-bold mt-4 mb-2">Создание брифа</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            Заполните информацию о вашем проекте, чтобы мы могли подобрать подходящих специалистов
            и начать работу над вашим брендом.
          </p>
        </div>
        
        {/* Индикатор прогресса */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-3xl">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                    step > index + 1 
                      ? "bg-primary text-white" 
                      : step === index + 1 
                        ? "bg-primary text-white" 
                        : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                  )}
                >
                  {step > index + 1 ? <Check className="w-5 h-5" /> : index + 1}
                </div>
                
                {index < totalSteps - 1 && (
                  <div 
                    className={cn(
                      "h-1 w-16 md:w-24 lg:w-32 mx-2", 
                      step > index + 1 ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-between max-w-3xl mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Основная информация</span>
            <span>Цели и аудитория</span>
            <span>Стилистика</span>
            <span>Требования</span>
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl mx-auto">
            {/* Шаг 1: Основная информация */}
            {step === 1 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Основная информация о проекте</CardTitle>
                    <CardDescription>
                      Расскажите нам о вашей компании и типе проекта
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="projectName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Название проекта *</FormLabel>
                          <FormControl>
                            <Input placeholder="Например: Ребрендинг кофейни 'Бодрость'" {...field} />
                          </FormControl>
                          <FormDescription>
                            Укажите название вашего проекта
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Название компании/продукта *</FormLabel>
                          <FormControl>
                            <Input placeholder="Например: Кофейня 'Бодрость'" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Отрасль *</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите отрасль" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="food">Продукты питания и напитки</SelectItem>
                              <SelectItem value="retail">Розничная торговля</SelectItem>
                              <SelectItem value="fashion">Мода и одежда</SelectItem>
                              <SelectItem value="tech">Технологии и IT</SelectItem>
                              <SelectItem value="finance">Финансы и страхование</SelectItem>
                              <SelectItem value="health">Здравоохранение</SelectItem>
                              <SelectItem value="education">Образование</SelectItem>
                              <SelectItem value="entertainment">Развлечения и медиа</SelectItem>
                              <SelectItem value="other">Другое</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Тип проекта *</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите тип проекта" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="new_brand">Новый бренд с нуля</SelectItem>
                              <SelectItem value="rebranding">Ребрендинг</SelectItem>
                              <SelectItem value="logo_only">Только логотип</SelectItem>
                              <SelectItem value="identity">Фирменный стиль</SelectItem>
                              <SelectItem value="packaging">Дизайн упаковки</SelectItem>
                              <SelectItem value="naming">Нейминг и позиционирование</SelectItem>
                              <SelectItem value="full_package">Полный комплекс услуг</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </div>
            )}
            
            {/* Шаг 2: Цели и аудитория */}
            {step === 2 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Цели проекта и целевая аудитория</CardTitle>
                    <CardDescription>
                      Расскажите, чего вы хотите достичь и для кого создаете бренд
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="projectGoals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Цели проекта *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Например: Создать современный и узнаваемый бренд, который выделит нашу кофейню среди конкурентов и привлечет молодую аудиторию" 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Опишите, чего вы хотите достичь с помощью нового бренда
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="targetAudience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Целевая аудитория *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Например: Молодые профессионалы 25-35 лет, ценящие качество и уникальность, активные пользователи социальных сетей" 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Опишите вашу целевую аудиторию, их возраст, интересы, привычки
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="competitors"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Конкуренты</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Например: Кофейни 'Кофеман', 'Arabica'. Нам нравится их подход к дизайну, но хотим выглядеть более премиально" 
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Укажите ваших конкурентов и что вам нравится/не нравится в их брендах
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </div>
            )}
            
            {/* Шаг 3: Стилистика и дизайн */}
            {step === 3 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Стилистика и визуальные предпочтения</CardTitle>
                    <CardDescription>
                      Расскажите о стиле и настроении, которые хотите передать через бренд
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="designStyle"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Стиль дизайна *</FormLabel>
                            <FormDescription>
                              Выберите стили, которые вам нравятся
                            </FormDescription>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              { id: "minimalist", label: "Минималистичный", icon: <PenTool className="h-4 w-4" /> },
                              { id: "vintage", label: "Винтажный", icon: <FileText className="h-4 w-4" /> },
                              { id: "modern", label: "Современный", icon: <Target className="h-4 w-4" /> },
                              { id: "playful", label: "Игривый", icon: <Image className="h-4 w-4" /> },
                              { id: "corporate", label: "Корпоративный", icon: <Users className="h-4 w-4" /> },
                              { id: "luxury", label: "Премиальный", icon: <Palette className="h-4 w-4" /> },
                            ].map((item) => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="designStyle"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(item.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, item.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item.id
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <div className="space-y-1 leading-none">
                                        <FormLabel className="flex items-center gap-2">
                                          {item.icon}
                                          {item.label}
                                        </FormLabel>
                                      </div>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="colorPreferences"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Цветовые предпочтения</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Например: Предпочитаем теплые оттенки коричневого и зеленого, ассоциирующиеся с кофе и натуральностью" 
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Опишите цвета, которые вам нравятся или которых вы хотите избежать
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="moodDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Настроение бренда *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Например: Уютный, теплый, вдохновляющий бренд, который создает ощущение комфорта и качественного отдыха" 
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Опишите эмоции и ощущения, которые должен вызывать ваш бренд
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </div>
            )}
            
            {/* Шаг 4: Требования и сроки */}
            {step === 4 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Требования, сроки и бюджет</CardTitle>
                    <CardDescription>
                      Укажите детали реализации проекта
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="deliverables"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Необходимые материалы *</FormLabel>
                            <FormDescription>
                              Выберите, какие элементы бренда вам нужны
                            </FormDescription>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              { id: "logo", label: "Логотип" },
                              { id: "color_palette", label: "Цветовая палитра" },
                              { id: "typography", label: "Типографика" },
                              { id: "business_cards", label: "Визитные карточки" },
                              { id: "letterhead", label: "Фирменный бланк" },
                              { id: "social_media", label: "Оформление соцсетей" },
                              { id: "packaging", label: "Дизайн упаковки" },
                              { id: "brand_book", label: "Брендбук" },
                            ].map((item) => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="deliverables"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(item.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, item.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item.id
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <div className="space-y-1 leading-none">
                                        <FormLabel>
                                          {item.label}
                                        </FormLabel>
                                      </div>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="deadline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Желаемые сроки *</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Выберите срок" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="urgent">Срочно (до 2 недель)</SelectItem>
                                <SelectItem value="normal">Стандартно (2-4 недели)</SelectItem>
                                <SelectItem value="relaxed">Не срочно (1-2 месяца)</SelectItem>
                                <SelectItem value="flexible">Гибкие сроки</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Бюджет *</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Выберите бюджет" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="economy">Эконом (до 50 000 ₽)</SelectItem>
                                <SelectItem value="standard">Стандарт (50 000 - 150 000 ₽)</SelectItem>
                                <SelectItem value="premium">Премиум (150 000 - 300 000 ₽)</SelectItem>
                                <SelectItem value="enterprise">Индивидуальный (от 300 000 ₽)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Дополнительная информация</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Любые дополнительные детали или пожелания к проекту" 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Укажите любую дополнительную информацию, которая может быть полезна для работы над проектом
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </div>
            )}
            
            {/* Навигация по шагам */}
            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={prevStep}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Назад
                </Button>
              ) : (
                <div></div> // Пустой div для сохранения flexbox выравнивания
              )}
              
              {step < totalSteps ? (
                <Button 
                  type="button" 
                  onClick={nextStep}
                >
                  Далее
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {isSubmitting ? "Отправка..." : "Отправить бриф"}
                  {!isSubmitting && <Check className="w-4 h-4 ml-2" />}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
      
      {/* Предпросмотр специалистов (дополнительная секция) */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Наши специалисты готовы к работе</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              После создания брифа вы сможете выбрать специалистов для вашего проекта из нашей команды
            </p>
          </div>
          
          <Tabs defaultValue="all" className="max-w-5xl mx-auto">
            <TabsList className="mb-6">
              <TabsTrigger value="all">Все специалисты</TabsTrigger>
              <TabsTrigger value="designers">Дизайнеры</TabsTrigger>
              <TabsTrigger value="strategists">Стратеги</TabsTrigger>
              <TabsTrigger value="illustrators">Иллюстраторы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Специалист 1 */}
                <Card className="overflow-hidden hover:shadow-md transition-all">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Анна Смирнова" 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Анна Смирнова</CardTitle>
                    <CardDescription>Арт-директор, брендинг</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Минимализм</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Брендбуки</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      10+ лет опыта в разработке фирменных стилей для крупных брендов
                    </p>
                  </CardContent>
                </Card>
                
                {/* Специалист 2 */}
                <Card className="overflow-hidden hover:shadow-md transition-all">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Максим Петров" 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Максим Петров</CardTitle>
                    <CardDescription>Графический дизайнер</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Иллюстрации</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Упаковка</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Специализируется на создании уникальных иллюстраций и дизайне упаковки
                    </p>
                  </CardContent>
                </Card>
                
                {/* Специалист 3 */}
                <Card className="overflow-hidden hover:shadow-md transition-all">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Екатерина Новикова" 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Екатерина Новикова</CardTitle>
                    <CardDescription>Стратег, нейминг</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Позиционирование</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Нейминг</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Разрабатывает стратегии позиционирования брендов и создает уникальные названия
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="designers" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Дизайнеры будут здесь */}
                <Card className="overflow-hidden hover:shadow-md transition-all">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Максим Петров" 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Максим Петров</CardTitle>
                    <CardDescription>Графический дизайнер</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Иллюстрации</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Упаковка</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Специализируется на создании уникальных иллюстраций и дизайне упаковки
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="strategists" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Стратеги будут здесь */}
                <Card className="overflow-hidden hover:shadow-md transition-all">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Екатерина Новикова" 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Екатерина Новикова</CardTitle>
                    <CardDescription>Стратег, нейминг</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Позиционирование</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Нейминг</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Разрабатывает стратегии позиционирования брендов и создает уникальные названия
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="illustrators" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Иллюстраторы будут здесь */}
                <Card className="overflow-hidden hover:shadow-md transition-all">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Алексей Иванов" 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Алексей Иванов</CardTitle>
                    <CardDescription>3D-дизайнер, иллюстратор</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">3D-моделирование</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Иллюстрации</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Создает реалистичные 3D-модели упаковки и визуализации брендовых продуктов
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Футер */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="font-bold text-xl text-white mr-2">DA\LI</div>
              <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                Брендинговое агентство
              </span>
            </div>
            
            <div className="text-sm text-gray-500">
              &copy; 2024 DA\LI. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreateBrief;
