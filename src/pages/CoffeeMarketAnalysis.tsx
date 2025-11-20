import React, { useEffect, useRef, useMemo } from 'react';
// Импортируйте Chart.js/auto для включения всех необходимых контроллеров, элементов и масштабов.
import Chart from 'chart.js/auto';

// Определение типов для данных
type ChartData = {
    labels: string[];
    data: number[];
    colors: string[];
};

// --- DATA DEFINITIONS ---
const MARKET_FORMATS_DATA: ChartData = {
    labels: ['Растворимый', 'Зерно/Молотый', 'Капсулы'],
    data: [45, 40, 15],
    colors: ['#D97706', '#B45309', '#FCD34D'],
};

const HORECA_DRINKS = [
    { rank: '🥇', name: 'Капучино', description: 'Абсолютный лидер продаж.' },
    { rank: '🥈', name: 'Латте', description: 'Популярен благодаря мягкому вкусу.' },
    { rank: '🥉', name: 'Американо', description: 'Стабильный выбор для любителей черного кофе.' },
    { rank: '☕', name: 'Флэт Уайт и Раф', description: 'Популярны в specialty-кофейнях.' },
];

const LOCAL_BRANDS = [
    { name: '“Neft” (Нефть)', detail: 'Известный specialty-бренд, выросший из собственной сети кофеен.' },
    { name: '“Set” (ранее “Shtab”)', detail: 'Популярный казанский проект с собственной обжаркой и фокусом на качестве зерна.' },
    { name: 'Skuratov Coffee Roasters', detail: 'Бренд из Омска, но с мощным присутствием и собственным обжарочным цехом в Казани.' },
    { name: '“Grelka”', detail: 'Менее крупный, но заметный локальный игрок.' },
];

const FEDERAL_BRANDS = [
    { name: 'Lavazza (Италия)', detail: 'Один из лидеров в сегменте зернового и молотого кофе в рознице.' },
    { name: 'Jacobs (JDE)', detail: 'Лидер в сегменте растворимого кофе и сильный игрок в зерновом масс-маркете.' },
    { name: 'Nescafe (Nestlé)', detail: 'Безусловный лидер в категории растворимого кофе.' },
    { name: 'Jardin и Egoiste', detail: 'Сильные федеральные бренды, успешно конкурирующие с импортом.' },
    { name: 'Paulig (Финляндия)', detail: 'Традиционно сильный бренд в сегменте зернового кофе.' },
];

const SALES_CHANNELS = [
    { icon: '🛒', title: 'Retail', description: 'Основной канал для масс-маркет брендов. Включает федеральные сети и местные.' },
    { icon: '🍽️', title: 'HoReCa', description: 'Ключевой канал для specialty-кофе. Местные обжарщики поставляют зерно в рестораны и кофейни.' },
    { icon: '💻', title: 'E-commerce', description: 'Стремительно растущий канал. Лидируют маркетплейсы (Ozon, Wildberries) и сервисы доставки.' },
    { icon: '🏭', title: 'D2C', description: 'Прямые продажи от обжарщиков через их веб-сайты и, что важно, через собственные кофейни.' },
];
// --- END DATA DEFINITIONS ---

// Компонент CoffeeMarketAnalysis
const CoffeeMarketAnalysis: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                chartInstance.current = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: MARKET_FORMATS_DATA.labels,
                        datasets: [{
                            label: 'Доля рынка',
                            data: MARKET_FORMATS_DATA.data,
                            backgroundColor: MARKET_FORMATS_DATA.colors,
                            borderColor: '#1f2937', // Dark background border
                            borderWidth: 4,
                            hoverOffset: 8,
                        }],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    padding: 20,
                                    color: '#F3F4F6', // Light gray text for labels
                                    font: {
                                        size: 14,
                                        family: "'Inter', sans-serif",
                                    },
                                },
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context: any) {
                                        let label = context.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed !== null) {
                                            label += context.parsed + '% (Оценка)';
                                        }
                                        return label;
                                    },
                                },
                            },
                        },
                    },
                });
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    // Кастомизированный компонент Card
    // Используем `group` для эффекта при наведении
    const Card: React.FC<{ children: React.ReactNode, accent?: 'gold' | 'default' }> = ({ children, accent = 'default' }) => (
        <div className={`
      p-6 rounded-xl shadow-lg transition-all duration-300 group
      ${accent === 'gold'
            ? 'bg-stone-800 border-2 border-amber-500 hover:shadow-amber-500/50 hover:shadow-xl'
            : 'bg-stone-800 border border-stone-700 hover:border-amber-500'
        }
    `}>
            {children}
        </div>
    );

    return (
        // Устанавливаем базовые стили для всего компонента
        <div className="min-h-screen bg-stone-900 text-stone-100 font-[Inter] p-4 sm:p-8">
            {/* Chosen Palette: Black and Gold (stone-900, stone-100, amber-500) */}
            {/* Application Structure Plan: Простая, вертикально прокручиваемая, тематически разделенная структура. 1. Обзор, 2. Популярные продукты (с диаграммой), 3. Ключевые бренды (сравнение), 4. Каналы сбыта (визуальная сетка). */}
            {/* Visualization & Content Choices: 1. Доля рынка по форматам -> Пропорции -> Кольцевая диаграмма (Chart.js) -> Наведение для подсказки -> Четкое разделение долей. 2. Списки брендов/напитков -> Организация/Сравнение -> Карточки и маркированные списки -> Нет взаимодействия -> Легко усваиваемый текст. 3. Каналы сбыта -> Организация -> Сетка из 4 карточек с эмодзи -> Нет взаимодействия -> Визуальная диаграмма-поток. Все без SVG/Mermaid. */}
            {/* CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. */}

            <main className="max-w-7xl mx-auto space-y-16 pt-8">

                {/* Секция 1: Обзор */}
                <section className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-amber-500 mb-6 border-b pb-2 border-amber-500/50">
                        Кофейный рынок Татарстана: Анализ
                    </h1>
                    <p className="text-xl text-stone-300 mb-8">
                        Это интерактивный обзор ключевых сегментов кофейного рынка в Республике Татарстан. Здесь вы найдете ключевые тенденции, игроков и каналы дистрибуции.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card accent="default">
                            <h3 className="text-2xl font-semibold text-amber-400 mb-2">Ключевой тренд: Рост Specialty</h3>
                            <p className="text-stone-300">Наблюдается "кофейный бум", стимулирующий самый быстрый рост в сегменте зернового и молотого кофе. Это связано с развитием культуры кофеен "третьей волны".</p>
                        </Card>
                        <Card accent="default">
                            <h3 className="text-2xl font-semibold text-amber-400 mb-2">Доминирование масс-маркета</h3>
                            <p className="text-stone-300">Растворимый кофе, представленный транснациональными гигантами, по-прежнему занимает значительную долю рынка в натуральном выражении, особенно в масс-маркете.</p>
                        </Card>
                    </div>
                </section>

                {/* Секция 2: Популярные Продукты */}
                <section className="space-y-8 pt-8">
                    <h2 className="text-3xl font-bold text-amber-500">Популярные Продукты и Предпочтения</h2>
                    <p className="text-lg text-stone-300">
                        Разделение рынка на традиционный масс-маркет и быстрорастущий сегмент "specialty" наиболее ярко видно в предпочтениях по формату и напиткам HoReCa.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* График */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl font-semibold text-stone-100 mb-4 text-center">Доли рынка по форматам (Оценка)</h3>
                            {/* Класс 'relative' критичен для Chart.js, чтобы контейнер правильно управлял размерами Canvas. */}
                            <div className="relative bg-stone-800 p-4 rounded-xl shadow-inner border border-stone-700 w-full max-w-lg h-96">
                                <canvas ref={chartRef}></canvas>
                            </div>
                        </div>
                        {/* Напитки HoReCa */}
                        <div>
                            <Card accent="gold">
                                <h3 className="text-2xl font-semibold text-stone-100 mb-4">Топ напитков в HoReCa</h3>
                                <p className="text-stone-400 mb-6">В кофейнях Казани и других городов республики лидируют напитки на основе эспрессо:</p>
                                <ul className="space-y-4">
                                    {HORECA_DRINKS.map((item) => (
                                        <li key={item.name} className="flex items-start text-lg">
                                            <span className="text-2xl mr-3">{item.rank}</span>
                                            <div>
                                                <span className="font-semibold text-amber-400">{item.name}</span>
                                                <span className="text-stone-300 ml-2">{item.description}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Секция 3: Ключевые Бренды */}
                <section className="space-y-8 pt-8">
                    <h2 className="text-3xl font-bold text-amber-500">Ключевые Бренды Рынка</h2>
                    <p className="text-lg text-stone-300">
                        Рынок разделен между крупными международными игроками (розница) и сильными местными обжарщиками (specialty).
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Местные */}
                        <div>
                            <h3 className="text-2xl font-semibold text-stone-100 mb-6 border-b pb-2 border-stone-700">Местные обжарщики</h3>
                            <div className="space-y-4">
                                {LOCAL_BRANDS.map((brand) => (
                                    <Card key={brand.name} accent="gold">
                                        <h4 className="text-xl font-bold text-amber-400">{brand.name}</h4>
                                        <p className="text-stone-400 mt-1">{brand.detail}</p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                        {/* Федеральные/Импортные */}
                        <div>
                            <h3 className="text-2xl font-semibold text-stone-100 mb-6 border-b pb-2 border-stone-700">Федеральные и Импортные Лидеры</h3>
                            <div className="space-y-4">
                                {FEDERAL_BRANDS.map((brand) => (
                                    <Card key={brand.name} accent="default">
                                        <h4 className="text-xl font-bold text-stone-300">{brand.name}</h4>
                                        <p className="text-stone-400 mt-1">{brand.detail}</p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Секция 4: Каналы Сбыта */}
                <section className="space-y-8 pt-8">
                    <h2 className="text-3xl font-bold text-amber-500">Каналы Сбыта</h2>
                    <p className="text-lg text-stone-300 mb-8">
                        Четыре основных канала дистрибуции, через которые кофе попадает к потребителю.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SALES_CHANNELS.map((channel) => (
                            <Card key={channel.title} accent="gold">
                                <div className="text-5xl mb-4 text-center">{channel.icon}</div>
                                <h3 className="text-2xl font-semibold text-amber-400 mb-2 text-center">{channel.title}</h3>
                                <p className="text-stone-400 text-center">{channel.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>

            </main>

            <footer className="text-center p-8 mt-16 border-t border-amber-500/50">
                <p className="text-stone-500">
                    Интерактивный отчет о кофейном рынке Татарстана.
                </p>
            </footer>
        </div>
    );
};

export default CoffeeMarketAnalysis;