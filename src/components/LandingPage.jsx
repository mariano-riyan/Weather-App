import SearchBar from './SearchBar';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/Card";

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
        <div className='space-y-16'>
            <div className='space-y-8 text-center mt-16'>
                <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold'>Weather</h1>
                <p className='text-sm xl:text-base tracking-wide'>Beautifully minimal weather data, engineered for the modern web.</p>

                <SearchBar 
                    value={value}
                    onCityChange={onCityChange}
                    onSearch={onSearch}
                    history={history}
                    onClear={onClear}
                />
            </div>

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
        </div>
    );
}
 
export default LandingPage;