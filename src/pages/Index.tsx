import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Photo {
  id: number;
  title: string;
  image: string;
  price: number;
  genre: string;
  size: string;
}

const photos: Photo[] = [
  {
    id: 1,
    title: 'Закат в лесу',
    image: 'https://cdn.poehali.dev/projects/00afc49c-9ffa-4c7c-9df0-e6cbf78b02e0/files/88f10c1e-0017-4b56-a379-7d9e3343632c.jpg',
    price: 2500,
    genre: 'Природа',
    size: '30x40'
  },
  {
    id: 2,
    title: 'Городские огни',
    image: 'https://cdn.poehali.dev/projects/00afc49c-9ffa-4c7c-9df0-e6cbf78b02e0/files/ce161f9e-bd75-4d77-9e24-030d5d4fff5b.jpg',
    price: 3500,
    genre: 'Урбанистика',
    size: '40x60'
  },
  {
    id: 3,
    title: 'Абстракция',
    image: 'https://cdn.poehali.dev/projects/00afc49c-9ffa-4c7c-9df0-e6cbf78b02e0/files/01b81b2b-ad78-4609-9e4a-58cc08aa3116.jpg',
    price: 4200,
    genre: 'Абстракция',
    size: '50x70'
  },
  {
    id: 4,
    title: 'Горный пейзаж',
    image: 'https://cdn.poehali.dev/projects/00afc49c-9ffa-4c7c-9df0-e6cbf78b02e0/files/88f10c1e-0017-4b56-a379-7d9e3343632c.jpg',
    price: 3000,
    genre: 'Природа',
    size: '30x40'
  },
  {
    id: 5,
    title: 'Ночной город',
    image: 'https://cdn.poehali.dev/projects/00afc49c-9ffa-4c7c-9df0-e6cbf78b02e0/files/ce161f9e-bd75-4d77-9e24-030d5d4fff5b.jpg',
    price: 3800,
    genre: 'Урбанистика',
    size: '40x60'
  },
  {
    id: 6,
    title: 'Геометрия цвета',
    image: 'https://cdn.poehali.dev/projects/00afc49c-9ffa-4c7c-9df0-e6cbf78b02e0/files/01b81b2b-ad78-4609-9e4a-58cc08aa3116.jpg',
    price: 5000,
    genre: 'Абстракция',
    size: '50x70'
  }
];

const Index = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('Все');
  const [selectedSize, setSelectedSize] = useState<string>('Все');
  const [priceRange, setPriceRange] = useState<string>('Все');

  const genres = ['Все', 'Природа', 'Урбанистика', 'Абстракция'];
  const sizes = ['Все', '30x40', '40x60', '50x70'];
  const priceRanges = ['Все', 'До 3000₽', '3000-4000₽', 'От 4000₽'];

  const filteredPhotos = photos.filter(photo => {
    const genreMatch = selectedGenre === 'Все' || photo.genre === selectedGenre;
    const sizeMatch = selectedSize === 'Все' || photo.size === selectedSize;
    
    let priceMatch = true;
    if (priceRange === 'До 3000₽') priceMatch = photo.price < 3000;
    else if (priceRange === '3000-4000₽') priceMatch = photo.price >= 3000 && photo.price <= 4000;
    else if (priceRange === 'От 4000₽') priceMatch = photo.price > 4000;

    return genreMatch && sizeMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur-lg z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">📸 ФотоГалерея</h1>
          <nav className="flex items-center gap-6">
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <Button size="sm" className="gap-2">
              <Icon name="ShoppingCart" size={16} />
              Корзина
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/00afc49c-9ffa-4c7c-9df0-e6cbf78b02e0/files/88f10c1e-0017-4b56-a379-7d9e3343632c.jpg)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white animate-fade-in px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Искусство в каждом кадре</h2>
          <p className="text-xl md:text-2xl mb-8 font-light">Профессиональная фотопечать премиум качества</p>
          <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
            Смотреть коллекцию
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="catalog" className="container mx-auto px-4 py-16">
        <div className="mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold mb-8">Каталог работ</h3>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold mb-2 text-muted-foreground">Жанр</p>
              <div className="flex flex-wrap gap-2">
                {genres.map(genre => (
                  <Badge
                    key={genre}
                    variant={selectedGenre === genre ? 'default' : 'outline'}
                    className="cursor-pointer hover:scale-105 transition-transform px-4 py-2"
                    onClick={() => setSelectedGenre(genre)}
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-2 text-muted-foreground">Размер</p>
              <div className="flex flex-wrap gap-2">
                {sizes.map(size => (
                  <Badge
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    className="cursor-pointer hover:scale-105 transition-transform px-4 py-2"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-2 text-muted-foreground">Цена</p>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map(range => (
                  <Badge
                    key={range}
                    variant={priceRange === range ? 'default' : 'outline'}
                    className="cursor-pointer hover:scale-105 transition-transform px-4 py-2"
                    onClick={() => setPriceRange(range)}
                  >
                    {range}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <p className="text-muted-foreground">
              Найдено: <span className="font-semibold text-foreground">{filteredPhotos.length}</span> работ
            </p>
            {(selectedGenre !== 'Все' || selectedSize !== 'Все' || priceRange !== 'Все') && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedGenre('Все');
                  setSelectedSize('Все');
                  setPriceRange('Все');
                }}
              >
                Сбросить фильтры
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <Card 
              key={photo.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Button className="w-full gap-2" size="lg">
                        <Icon name="ShoppingCart" size={18} />
                        В корзину
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-lg">{photo.title}</h4>
                    <Badge variant="secondary">{photo.genre}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Maximize2" size={14} />
                      {photo.size} см
                    </span>
                    <span className="text-xl font-bold text-primary">{photo.price}₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-16">
            <Icon name="ImageOff" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
            <p className="text-muted-foreground">Попробуйте изменить параметры фильтров</p>
          </div>
        )}
      </section>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2024 ФотоГалерея. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:text-primary transition-colors">О нас</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Доставка</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
