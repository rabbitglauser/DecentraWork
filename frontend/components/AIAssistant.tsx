import { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles, Heart, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTip, setCurrentTip] = useState(0);

    const tips = [
        "💡 New to ICP? I can help you set up your first crypto wallet!",
        "🚀 Looking for blockchain developers? Try searching 'ICP canister development'",
        "⭐ Check seller ratings and reviews before placing orders",
        "💰 All payments are secured by smart contracts - no middleman needed!",
        "🔥 Pro tip: Use specific keywords to find exactly what you need"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTip((prev) => (prev + 1) % tips.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {/* Floating Assistant Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {!isOpen && (
                    <Button
                        onClick={() => setIsOpen(true)}
                        className="w-16 h-16 rounded-full gradient-accent shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-slow border-4 border-white"
                    >
                        <div className="relative">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <span className="text-2xl">🤖</span>
                            </div>
                            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-white animate-spin" />
                        </div>
                    </Button>
                )}
            </div>

            {/* Assistant Chat Panel */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50">
                    <Card className="w-80 shadow-2xl border-2 border-blue-200 bg-white/95 backdrop-blur-md">
                        <div className="flex items-center justify-between p-4 border-b gradient-primary rounded-t-lg">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🤖</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">ICPy Assistant</h3>
                                    <p className="text-xs text-blue-100">Your Web3 guide</p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:bg-white/20"
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </div>

                        <CardContent className="p-4 space-y-4">
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-sm">🤖</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            {tips[currentTip]}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Button
                                    variant="outline"
                                    className="w-full justify-start text-left h-auto p-3 hover:bg-blue-50"
                                >
                                    <HelpCircle className="w-4 h-4 mr-2 text-blue-500" />
                                    <div>
                                        <div className="font-medium text-sm">How does ICP work?</div>
                                        <div className="text-xs text-gray-500">Learn about the Internet Computer</div>
                                    </div>
                                </Button>

                                <Button
                                    variant="outline"
                                    className="w-full justify-start text-left h-auto p-3 hover:bg-green-50"
                                >
                                    <Sparkles className="w-4 h-4 mr-2 text-green-500" />
                                    <div>
                                        <div className="font-medium text-sm">Find top freelancers</div>
                                        <div className="text-xs text-gray-500">Get personalized recommendations</div>
                                    </div>
                                </Button>

                                <Button
                                    variant="outline"
                                    className="w-full justify-start text-left h-auto p-3 hover:bg-purple-50"
                                >
                                    <Heart className="w-4 h-4 mr-2 text-purple-500" />
                                    <div>
                                        <div className="font-medium text-sm">Start selling</div>
                                        <div className="text-xs text-gray-500">Create your first gig</div>
                                    </div>
                                </Button>
                            </div>

                            <div className="text-center pt-2">
                                <p className="text-xs text-gray-500">
                                    Powered by AI • Built on ICP
                                    <Heart className="w-3 h-3 inline mx-1 text-red-400" />
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </>
    );
};

export default AIAssistant;