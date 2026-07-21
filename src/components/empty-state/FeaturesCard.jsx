import { Card, CardDescription, CardHeader, CardTitle, } from "@/components/ui/Card";

import { ClockCheck, MapPinSearch, Thermometer } from 'lucide-react';
import { getFeaturesData } from '@/services/featuresService';

export const FeaturesCard = () => {

    const features = getFeaturesData().Features;

    const icons = {
        clock: ClockCheck,
        search: MapPinSearch,
        unit: Thermometer
    }

    return (
        <div className="grid md:grid-cols-3 gap-8">
            {features.map(feature => {

                const Icon = icons[feature.icon];

                return (
                    <Card key={feature.id} className="h-full p-10 md:p-6 lg:p-10 space-y-4">
                        {Icon && 
                            <Icon size={50} className='self-center p-3 bg-accent rounded-full' />
                        }
                        <CardHeader className='text-center tracking-wide space-y-2'>
                            <CardTitle className="font-semibold text-xs lg:text-sm uppercase">{feature.name}</CardTitle>
                            <CardDescription>{feature.desc}</CardDescription>
                        </CardHeader>
                    </Card>
                )
            })}
        </div>
    );
}