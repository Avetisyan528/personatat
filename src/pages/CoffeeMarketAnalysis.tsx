import React, { useEffect, useRef } from 'react';
// FIX: Using explicit Chart constructor and registerables to resolve module loading errors
import { Chart as ChartConstructor, ChartData, registerables } from 'chart.js';

// Register all components, elements, and scales globally.
ChartConstructor.register(...registerables);

// --- THEME COLOR DEFINITIONS (Based on your MUI palette) ---
// Default Background (Primary Main/Background Default): #000000 (Black)
const BG_COLOR = 'bg-black';
// Paper/Card Background (Background Paper): #111111 (Very Dark Grey)
const PAPER_COLOR = 'bg-[#111111]';
// Secondary/Accent Color (Secondary Main): #c8a15a (Gold/Bronze)
const ACCENT_COLOR_HEX = '#c8a15a';
const ACCENT_TEXT_COLOR = 'text-[#c8a15a]';
const ACCENT_BORDER_COLOR = 'border-[#c8a15a]';
const ACCENT_HOVER_SHADOW = 'hover:shadow-[#c8a15a]/50';
// Light Text (Contrast Text): #ffffff (White)
const TEXT_COLOR = 'text-white';
const CHART_LABEL_COLOR = '#FFFFFF';

// --- DATA DEFINITIONS ---
type MarketChartData = {
    labels: string[];
    data: number[];
    colors: string[];
};

// Original data structure is updated to use theme-compliant colors
const MARKET_FORMATS_DATA: MarketChartData = {
    labels: ['Растворимый', 'Зерно/Молотый', 'Капсулы'],
    data: [45, 40, 15],
    // Shades of gold/bronze for the doughnut chart
    colors: [ACCENT_COLOR_HEX, '#A8874E', '#E0C698'],
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

// Component: CoffeeMarketAnalysis
const CoffeeMarketAnalysis: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<ChartConstructor | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                // Use ChartConstructor to initialize the chart
                chartInstance.current = new ChartConstructor(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: MARKET_FORMATS_DATA.labels,
                        datasets: [{
                            label: 'Доля рынка',
                            data: MARKET_FORMATS_DATA.data,
                            backgroundColor: MARKET_FORMATS_DATA.colors,
                            borderColor: '#111111', // Matches Card background
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
                                    color: CHART_LABEL_COLOR, // White text
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

    // Customized Card Component
    const Card: React.FC<{ children: React.ReactNode, accent?: 'gold' | 'default' }> = ({ children, accent = 'default' }) => (
        <div className={`
      p-6 rounded-xl shadow-lg transition-all duration-300 group
      ${PAPER_COLOR} 
      ${accent === 'gold'
            ? `border-2 ${ACCENT_BORDER_COLOR} ${ACCENT_HOVER_SHADOW} hover:shadow-xl`
            : 'border border-gray-800 hover:border-[#c8a15a]'
        }
    `}>
            {children}
        </div>
    );

    return (
        // Main container uses Background and Contrast Text colors
        <div className={`min-h-screen ${BG_COLOR} ${TEXT_COLOR} font-[Inter] p-4 sm:p-8`}>

            <main className="max-w-7xl mx-auto space-y-16 pt-8">

                {/* Секция 1: Обзор */}
                <section className="space-y-6">
                    <h1 className={`text-4xl sm:text-5xl font-bold ${ACCENT_TEXT_COLOR} mb-6 border-b pb-2 border-[#c8a15a]/50`}>
                        Кофейный рынок Татарстана: Анализ
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">
                        Это интерактивный обзор ключевых сегментов кофейного рынка в Республике Татарстан. Здесь вы найдете ключевые тенденции, игроков и каналы дистрибуции.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card accent="default">
                            <h3 className={`text-2xl font-semibold ${ACCENT_TEXT_COLOR} mb-2`}>Ключевой тренд: Рост Specialty</h3>
                            <p className="text-gray-400">Наблюдается "кофейный бум", стимулирующий самый быстрый рост в сегменте зернового и молотого кофе. Это связано с развитием культуры кофеен "третьей волны".</p>
                        </Card>
                        <Card accent="default">
                            <h3 className={`text-2xl font-semibold ${ACCENT_TEXT_COLOR} mb-2`}>Доминирование масс-маркета</h3>
                            <p className="text-gray-400">Растворимый кофе, представленный транснациональными гигантами, по-прежнему занимает значительную долю рынка в натуральном выражении, особенно в масс-маркете.</p>
                        </Card>
                    </div>
                </section>

                {/* Секция 2: Популярные Продукты */}
                <section className="space-y-8 pt-8">
                    <h2 className={`text-3xl font-bold ${ACCENT_TEXT_COLOR}`}>Популярные Продукты и Предпочтения</h2>
                    <p className="text-lg text-gray-300">
                        Разделение рынка на традиционный масс-маркет и быстрорастущий сегмент "specialty" наиболее ярко видно в предпочтениях по формату и напиткам HoReCa.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* График */}
                        <div className="flex flex-col items-center">
                            <h3 className={`text-2xl font-semibold ${TEXT_COLOR} mb-4 text-center`}>Доли рынка по форматам (Оценка)</h3>
                            <div className={`relative ${PAPER_COLOR} p-4 rounded-xl shadow-inner border border-gray-800 w-full max-w-lg h-96`}>
                                <canvas ref={chartRef}></canvas>
                            </div>
                        </div>
                        {/* Напитки HoReCa */}
                        <div>
                            <Card accent="gold">
                                <h3 className={`text-2xl font-semibold ${TEXT_COLOR} mb-4`}>Топ напитков в HoReCa</h3>
                                <p className="text-gray-400 mb-6">В кофейнях Казани и других городов республики лидируют напитки на основе эспрессо:</p>
                                <ul className="space-y-4">
                                    {HORECA_DRINKS.map((item) => (
                                        <li key={item.name} className="flex items-start text-lg">
                                            <span className="text-2xl mr-3">{item.rank}</span>
                                            <div>
                                                <span className={`font-semibold ${ACCENT_TEXT_COLOR}`}>{item.name}</span>
                                                <span className="text-gray-300 ml-2">{item.description}</span>
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
                    <h2 className={`text-3xl font-bold ${ACCENT_TEXT_COLOR}`}>Ключевые Бренды Рынка</h2>
                    <p className="text-lg text-gray-300">
                        Рынок разделен между крупными международными игроками (розница) и сильными местными обжарщиками (specialty).
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Местные */}
                        <div>
                            <h3 className={`text-2xl font-semibold ${TEXT_COLOR} mb-6 border-b pb-2 border-gray-800`}>Местные обжарщики</h3>
                            <div className="space-y-4">
                                {LOCAL_BRANDS.map((brand) => (
                                    <Card key={brand.name} accent="gold">
                                        <h4 className={`text-xl font-bold ${ACCENT_TEXT_COLOR}`}>{brand.name}</h4>
                                        <p className="text-gray-400 mt-1">{brand.detail}</p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                        {/* Федеральные/Импортные */}
                        <div>
                            <h3 className={`text-2xl font-semibold ${TEXT_COLOR} mb-6 border-b pb-2 border-gray-800`}>Федеральные и Импортные Лидеры</h3>
                            <div className="space-y-4">
                                {FEDERAL_BRANDS.map((brand) => (
                                    <Card key={brand.name} accent="default">
                                        <h4 className={`text-xl font-bold ${TEXT_COLOR}`}>{brand.name}</h4>
                                        <p className="text-gray-400 mt-1">{brand.detail}</p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Секция 4: Каналы Сбыта */}
                <section className="space-y-8 pt-8">
                    <h2 className={`text-3xl font-bold ${ACCENT_TEXT_COLOR}`}>Каналы Сбыта</h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Четыре основных канала дистрибуции, через которые кофе попадает к потребителю.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SALES_CHANNELS.map((channel) => (
                            <Card key={channel.title} accent="gold">
                                <div className={`text-5xl mb-4 text-center ${ACCENT_TEXT_COLOR}`}>{channel.icon}</div>
                                <h3 className={`text-2xl font-semibold ${ACCENT_TEXT_COLOR} mb-2 text-center`}>{channel.title}</h3>
                                <p className="text-gray-400 text-center">{channel.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>

            </main>

            <footer className="text-center p-8 mt-16 border-t border-[#c8a15a]/50">
                <p className="text-gray-500">
                    Интерактивный отчет о кофейном рынке Татарстана.
                </p>
            </footer>
        </div>
    );
};

export default CoffeeMarketAnalysis;