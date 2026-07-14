import SearchBar from './SearchBar';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card"

import SplitText from "./SplitText";

import { getFeaturesData } from '../services/featuresService';
import { ClockCheck, MapPinSearch, Thermometer } from 'lucide-react';

const LandingPage = ({ value, onCityChange, onSearch, history, onXClick }) => {

    const features = getFeaturesData().Features;

    const icons = {
        clock: ClockCheck,
        search: MapPinSearch,
        unit: Thermometer
    }

    return (
        <div className='space-y-8'>
            <div className='space-y-4 text-center mt-16'>
                <SplitText
                    text="XWeather"
                    className="text-6xl font-semibold text-center"
                    delay={60}
                    duration={1}
                />
                <p className='text-sm tracking-wider'>Beautifully minimal weather data, engineered for the modern web.</p>
            </div>

            <div className='mb-24'>
                <SearchBar 
                    value={value}
                    onCityChange={onCityChange}
                    onSearch={onSearch}
                    history={history}
                    onXClick={onXClick}
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