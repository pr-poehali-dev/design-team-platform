
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Users, Briefcase, Star, Palette, Clock, PenSquare, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Навигация */}
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-bold text-xl text-primary">
              DA\LI
            </div>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              Брендинговое агентство
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">Как это работает</a>
            <a href="#benefits" className="text-sm hover:text-primary transition-colors">Преимущества</a>
            <a href="#team" className="text-sm hover:text-primary transition-colors">Специалисты</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link to="/account">
              <Button variant="outline" size="sm">Личный кабинет</Button>
            </Link>
            <Button size="sm">Начать проект</Button>
          </div>
        </div>
      </header>
      
      {/* Баннер */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Создание <span className="text-primary">бренда</span> с подходящими специалистами
            </h1>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
              Архитектурно-дизайнерское бюро DA\LI поможет вам создать уникальный бренд с нуля, 
              объединяя талантливых специалистов с вашим видением проекта.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium">
                Создать бриф
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                Подобрать специалиста
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-2/5 h-4/5">
          <div className="w-full h-full bg-[url('/placeholder.svg')] bg-no-repeat bg-contain bg-right-top opacity-90"></div>
        </div>
      </section>
      
      {/* Услуги */}
      <section id="services" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Наши услуги</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Полный цикл разработки бренда с контролем каждого этапа
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Разработка айдентики</CardTitle>
                <CardDescription>
                  Создание визуальной идентичности бренда от логотипа до полного фирменного стиля
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Разработка логотипа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Фирменный стиль</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Брендбук</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <PenSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Дизайн упаковки</CardTitle>
                <CardDescription>
                  Создание упаковки, которая выделит ваш продукт среди конкурентов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Дизайн упаковки</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Разработка макетов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">3D-визуализация</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Нейминг и позиционирование</CardTitle>
                <CardDescription>
                  Разработка названия и стратегии позиционирования бренда на рынке
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Нейминг</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Слоган и ключевые сообщения</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Стратегия позиционирования</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Как это работает */}
      <section id="how-it-works" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Как это работает</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Простой и понятный процесс разработки вашего бренда
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative rounded-lg bg-white dark:bg-gray-900 p-6 shadow-sm">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Создание брифа</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Заполните бриф, указав все пожелания и требования к будущему бренду
              </p>
            </div>
            
            <div className="relative rounded-lg bg-white dark:bg-gray-900 p-6 shadow-sm">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Подбор специалистов</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Выберите дизайнеров и специалистов, чьи стили и навыки соответствуют вашему видению
              </p>
            </div>
            
            <div className="relative rounded-lg bg-white dark:bg-gray-900 p-6 shadow-sm">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Контроль процесса</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Отслеживайте прогресс проекта, оставляйте комментарии и вносите корректировки в режиме реального времени
              </p>
            </div>
            
            <div className="relative rounded-lg bg-white dark:bg-gray-900 p-6 shadow-sm">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Готовый бренд</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Получите полный комплект материалов вашего нового бренда, готовых к использованию
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Преимущества (табы для клиентов и специалистов) */}
      <section id="benefits" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Преимущества платформы</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Для клиентов и специалистов
            </p>
          </div>
          
          <Tabs defaultValue="clients" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="clients">Для клиентов</TabsTrigger>
              <TabsTrigger value="specialists">Для специалистов</TabsTrigger>
            </TabsList>
            <TabsContent value="clients" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Персональный подбор специалистов</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Выбирайте специалистов с подходящим вам стилем и опытом работы
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Контроль на всех этапах</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Отслеживайте прогресс в реальном времени и вносите корректировки
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Гарантия качества</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Все специалисты проходят проверку и имеют подтвержденный опыт работы
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <PenSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Удобная коммуникация</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Общайтесь напрямую с исполнителями через встроенную систему комментариев
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="specialists" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Выбор проектов</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Выбирайте интересные вам брифы и развивайтесь в желаемом направлении
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Командная работа</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Присоединяйтесь к командам или создавайте свои для работы над сложными проектами
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Портфолио и рейтинг</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Наращивайте профессиональное портфолио и повышайте свой рейтинг
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Развитие навыков</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Расширяйте свои профессиональные компетенции, работая с разными клиентами
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Команда специалистов */}
      <section id="team" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Наши специалисты</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Профессионалы с разным видением и стилем
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Специалист 1 */}
            <Card className="overflow-hidden hover:shadow-md transition-all">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Анна Смирнова" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Анна Смирнова</CardTitle>
                <CardDescription>Арт-директор, брендинг</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary/10">Минимализм</Badge>
                  <Badge variant="outline" className="bg-primary/10">Брендбуки</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  10+ лет опыта в разработке фирменных стилей для крупных брендов
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Портфолио</Button>
              </CardFooter>
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
              <CardHeader>
                <CardTitle>Максим Петров</CardTitle>
                <CardDescription>Графический дизайнер</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary/10">Иллюстрации</Badge>
                  <Badge variant="outline" className="bg-primary/10">Упаковка</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Специализируется на создании уникальных иллюстраций и дизайне упаковки
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Портфолио</Button>
              </CardFooter>
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
              <CardHeader>
                <CardTitle>Екатерина Новикова</CardTitle>
                <CardDescription>Стратег, нейминг</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary/10">Позиционирование</Badge>
                  <Badge variant="outline" className="bg-primary/10">Нейминг</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Разрабатывает стратегии позиционирования брендов и создает уникальные названия
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Портфолио</Button>
              </CardFooter>
            </Card>
            
            {/* Специалист 4 */}
            <Card className="overflow-hidden hover:shadow-md transition-all">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Алексей Иванов" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Алексей Иванов</CardTitle>
                <CardDescription>3D-дизайнер</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary/10">3D-моделирование</Badge>
                  <Badge variant="outline" className="bg-primary/10">Визуализация</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Создает реалистичные 3D-модели упаковки и визуализации брендовых продуктов
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Портфолио</Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">Все специалисты</Button>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы создать уникальный бренд?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Начните прямо сейчас, создав бриф для вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-medium">
              Создать проект
            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>
      
      {/* Футер */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">DA\LI</h3>
              <p className="text-sm text-gray-400 mb-6">
                Архитектурно-дизайнерское бюро, специализирующееся на создании брендов с нуля
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Разработка айдентики</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дизайн упаковки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Нейминг</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Брендбук</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Клиентам</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Создать бриф</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Найти специалиста</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Цены</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Связаться с нами</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span>Email:</span>
                  <a href="mailto:info@dali-bureau.com" className="hover:text-primary transition-colors">
                    info@dali-bureau.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>Телефон:</span>
                  <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </li>
              </ul>
              <div className="mt-4 flex gap-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
            <div>
              &copy; 2024 DA\LI. Все права защищены.
            </div>
            <div className="mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors mr-4">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
