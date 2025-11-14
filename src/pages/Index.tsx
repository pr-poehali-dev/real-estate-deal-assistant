import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Search',
      title: 'Подбор недвижимости',
      description: 'Индивидуальный подбор квартир согласно вашим требованиям и бюджету. Анализ рынка и предоставление лучших вариантов.'
    },
    {
      icon: 'FileText',
      title: 'Юридическое сопровождение',
      description: 'Полная проверка документов, юридическая чистота сделки. Сопровождение на всех этапах до регистрации права собственности.'
    },
    {
      icon: 'Calculator',
      title: 'Помощь с ипотекой',
      description: 'Консультация по ипотечным программам, подбор оптимальных условий кредитования в ведущих банках.'
    },
    {
      icon: 'Shield',
      title: 'Безопасность сделки',
      description: 'Проверка всех участников сделки, минимизация рисков, контроль на каждом этапе оформления.'
    }
  ];

  const properties = [
    {
      image: 'https://cdn.poehali.dev/projects/fabe6b49-2111-49fa-bcdd-4c302569a9e3/files/584e0417-9023-4685-8f51-0493c27d925e.jpg',
      title: '3-комнатная квартира',
      location: 'Москва, ЦАО',
      area: '95 м²',
      price: '28 500 000 ₽'
    },
    {
      image: 'https://cdn.poehali.dev/projects/fabe6b49-2111-49fa-bcdd-4c302569a9e3/files/e2e7b799-2dd8-49ca-99da-64e9328e6b70.jpg',
      title: '2-комнатная квартира',
      location: 'Московская область',
      area: '68 м²',
      price: '12 800 000 ₽'
    },
    {
      image: 'https://cdn.poehali.dev/projects/fabe6b49-2111-49fa-bcdd-4c302569a9e3/files/380504c4-0a0c-4711-84c6-b85d60bd8cbc.jpg',
      title: 'Студия',
      location: 'Москва, СЗАО',
      area: '42 м²',
      price: '9 200 000 ₽'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={28} />
            <span className="text-xl font-bold">ИП Григорий Циховский</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#consultation" className="hover:text-accent transition-colors">Консультация</a>
            <a href="#properties" className="hover:text-accent transition-colors">Объекты</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-white py-24 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Подбор и сопровождение сделок
            <br />
            с недвижимостью
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Профессиональная помощь в покупке квартир в Москве и Московской области
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
            onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр услуг для безопасной покупки недвижимости
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Бесплатная консультация</h2>
            <p className="text-muted-foreground text-lg">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение (необязательно)</label>
                  <Textarea 
                    placeholder="Опишите ваши пожелания..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="text-base"
                  />
                </div>
                <Button type="submit" className="w-full text-lg py-6" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="properties" className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Актуальные объекты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Избранные предложения недвижимости
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{property.title}</CardTitle>
                  <CardDescription className="text-base flex items-center gap-1">
                    <Icon name="MapPin" size={16} />
                    {property.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Icon name="Maximize" size={16} />
                      {property.area}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-accent mb-4">{property.price}</div>
                  <Button className="w-full" variant="outline">
                    <Icon name="Eye" size={18} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" size={28} className="text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Телефон</h3>
              <a href="tel:+79255883556" className="text-lg hover:text-accent transition-colors">
                +7 925-588-3556
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" size={28} className="text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Email</h3>
              <a href="mailto:vsem.kvartiru.msk@mail.ru" className="text-lg hover:text-accent transition-colors">
                vsem.kvartiru.msk@mail.ru
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" size={28} className="text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Адрес</h3>
              <p className="text-lg">Москва, ЦАО</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-primary-foreground py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-90">
            © 2024 ИП Григорий Циховский. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;