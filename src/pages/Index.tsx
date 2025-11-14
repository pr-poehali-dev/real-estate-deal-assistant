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
    },
    {
      image: 'https://cdn.poehali.dev/projects/fabe6b49-2111-49fa-bcdd-4c302569a9e3/files/faec3bae-cc8b-4254-8c76-6d9e30c7dd8b.jpg',
      title: '2-комнатная квартира',
      location: 'Москва, САО, ЖК "Северная звезда"',
      area: '72 м²',
      price: '16 900 000 ₽'
    },
    {
      image: 'https://cdn.poehali.dev/projects/fabe6b49-2111-49fa-bcdd-4c302569a9e3/files/d6d02749-c1a1-408c-8083-f5ef1d739a40.jpg',
      title: '1-комнатная квартира',
      location: 'Москва, ЗАО, ЖК "Город на реке"',
      area: '48 м²',
      price: '11 200 000 ₽'
    },
    {
      image: 'https://cdn.poehali.dev/projects/fabe6b49-2111-49fa-bcdd-4c302569a9e3/files/23784614-e2df-4b0c-841a-648bb20b768b.jpg',
      title: '3-комнатная квартира',
      location: 'Москва, СВАО, ЖК "Лесной квартал"',
      area: '89 м²',
      price: '22 400 000 ₽'
    },
    {
      image: 'https://cdn.poehali.dev/projects/fabe6b49-2111-49fa-bcdd-4c302569a9e3/files/47e2b7cf-0568-466f-854d-d9f355e15e10.jpg',
      title: '4-комнатная квартира',
      location: 'Москва, ЦАО, ЖК "Пресня Сити"',
      area: '128 м²',
      price: '45 800 000 ₽'
    },
    {
      image: 'https://cdn.poehali.dev/projects/fabe6b49-2111-49fa-bcdd-4c302569a9e3/files/1d9f0dad-a193-42ec-bfaa-40fe7e2c6eaa.jpg',
      title: 'Студия',
      location: 'Москва, ВАО, ЖК "Новая Москва"',
      area: '35 м²',
      price: '7 600 000 ₽'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://functions.poehali.dev/929a17e7-b7c8-483e-aa40-a24482dd249c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        alert('Произошла ошибка. Попробуйте позже или позвоните нам.');
      }
    } catch (error) {
      alert('Произошла ошибка. Попробуйте позже или позвоните нам.');
    }
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
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Связаться с нами
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

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a 
          href="https://t.me/+79255883556" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Написать в Telegram"
        >
          <svg 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-8 h-8"
          >
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
        <a 
          href="https://wa.me/79255883556" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Написать в WhatsApp"
        >
          <svg 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-9 h-9"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Index;