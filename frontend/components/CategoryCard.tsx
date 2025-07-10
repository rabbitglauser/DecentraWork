import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
    category: {
        icon: LucideIcon;
        name: string;
        gigs: number;
        color: string;
    };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
    const Icon = category.icon;

    return (
        <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 bg-white/70 backdrop-blur-sm hover:bg-white/90">
            <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {category.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {category.gigs.toLocaleString()} services available
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;
