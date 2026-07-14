import SearchBar from './SearchBar';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card"

import { getFeaturesData } from '../services/featuresService';
import { ClockCheck, MapPinSearch, Thermometer } from 'lucide-react';

const LandingPage = ({ value, onCityChange, onSearch, history, onClear }) => {

    const features = getFeaturesData().Features;

    const icons = {
        clock: ClockCheck,
        search: MapPinSearch,
        unit: Thermometer
    }

    return (
        <div className='space-y-8'>
            <div className='space-y-2 text-center mt-16'>
                <h1 className='text-6xl font-bold'>Weather</h1>
                <p className='text-sm'>Beautifully minimal weather data, engineered for the modern web.</p>
            </div>

            <div className=''>
                <SearchBar 
                    value={value}
                    onCityChange={onCityChange}
                    onSearch={onSearch}
                    history={history}
                    onClear={onClear}
                />
            </div>

            <div className='flex flex-col gap-4'>
                {features.map(feature => {
                    const Icon = icons[feature.icon];

                    return (
                        <Card key={feature.id}>
                            {Icon && 
                                <Icon size={50} className='shrink-0 self-center p-3 bg-accent rounded-full' />
                            }

                            <CardHeader className='text-center'>
                                <CardTitle>{feature.name}</CardTitle>
                                <CardDescription>{feature.desc}</CardDescription>
                            </CardHeader>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}
 
export default LandingPage;