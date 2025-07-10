import { Star, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface GigCardProps {
    gig: {
        title: string;
        seller: string;
        rating: number;
        reviews: number;
        price: number;
        image: string;
        tags: string[];
    };
}

const GigCard = ({ gig }: GigCardProps) => {
    return (
        <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="relative overflow-hidden">
                <img
                    src={gig.image}
                    alt={gig.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 text-gray-700 hover:bg-white">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                    </Badge>
                </div>
            </div>

            <CardContent className="p-5 space-y-4">
                <div>
                    <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                        {gig.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">by @{gig.seller}</p>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{gig.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({gig.reviews} reviews)</span>
                </div>

                <div className="flex flex-wrap gap-2">
                    {gig.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Starting at</p>
                        <p className="text-lg font-bold text-blue-600">
                            {gig.price} ICP
                        </p>
                    </div>
                    <Button className="gradient-primary text-white border-0 hover:opacity-90 transition-all">
                        View Details
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default GigCard;