import { useState } from 'react';
import { Search, Wallet, Star, Clock, Shield, Zap, Code, Palette, PenTool, Camera, Music, Megaphone, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AIAssistant from '@/components/AIAssistant';
import GigCard from '@/components/GigCard';
import CategoryCard from '@/components/CategoryCard';

const Index = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { icon: Code, name: 'Programming & Tech', gigs: 12847, color: 'from-blue-500 to-cyan-500' },
        { icon: Palette, name: 'Graphics & Design', gigs: 9234, color: 'from-purple-500 to-pink-500' },
        { icon: PenTool, name: 'Writing & Translation', gigs: 7561, color: 'from-green-500 to-emerald-500' },
        { icon: Camera, name: 'Video & Animation', gigs: 5432, color: 'from-red-500 to-orange-500' },
        { icon: Music, name: 'Music & Audio', gigs: 3298, color: 'from-indigo-500 to-purple-500' },
        { icon: Megaphone, name: 'Digital Marketing', gigs: 8765, color: 'from-yellow-500 to-orange-500' },
    ];

    const featuredGigs = [
        {
            title: "I will create a stunning React DApp on ICP",
            seller: "cryptodev_pro",
            rating: 4.9,
            reviews: 247,
            price: 150,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
            tags: ["React", "ICP", "Web3"]
        },
        {
            title: "I will design modern UI/UX for blockchain apps",
            seller: "design_wizard",
            rating: 4.8,
            reviews: 189,
            price: 85,
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
            tags: ["UI/UX", "Figma", "Blockchain"]
        },
        {
            title: "I will write engaging Web3 content and copy",
            seller: "crypto_writer",
            rating: 4.9,
            reviews: 156,
            price: 45,
            image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b6cd?w=400&h=300&fit=crop",
            tags: ["Content", "Copywriting", "Crypto"]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                ICPGigs
                            </h1>
                        </div>

                        <nav className="hidden md:flex items-center space-x-6">
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Browse</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Sell</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <Button variant="outline" className="flex items-center space-x-2">
                                <Wallet className="w-4 h-4" />
                                <span>Connect Wallet</span>
                            </Button>
                            <Button className="gradient-primary text-white border-0 hover:opacity-90">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Freelance services,
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> powered by ICP</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Discover talented freelancers and secure, trustless payments on the Internet Computer blockchain.
                        Your next project starts here.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                placeholder="Try 'build ICP dapp' or 'blockchain design'"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 py-6 text-lg border-2 focus:border-blue-500 rounded-xl"
                            />
                        </div>
                        <Button className="gradient-primary text-white border-0 px-8 py-6 text-lg rounded-xl hover:opacity-90 transition-all animate-pulse-glow">
                            Search
                        </Button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                            <Shield className="w-4 h-4 text-green-500" />
                            <span>Secure Smart Contracts</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-blue-500" />
                            <span>Lightning Fast ICP</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            <span>AI Assistant Powered</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} category={category} />
                    ))}
                </div>
            </section>

            {/* Featured Gigs */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Gigs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredGigs.map((gig, index) => (
                        <GigCard key={index} gig={gig} />
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white/50 backdrop-blur-sm border-y border-white/20 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                            <div className="text-gray-600">Active Freelancers</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-600 mb-2">120K+</div>
                            <div className="text-gray-600">Completed Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-600 mb-2">2.5M</div>
                            <div className="text-gray-600">ICP Tokens Earned</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
                            <div className="text-gray-600">Uptime</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Assistant */}
            <AIAssistant />
        </div>
    );
};

export default Index;
