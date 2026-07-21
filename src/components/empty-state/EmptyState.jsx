import { FeaturesCard } from './FeaturesCard';
import SearchBar from '@/components/search/SearchBar';

const EmptyState = () => {

    return (
        <div className='space-y-16'>
            <div className='space-y-8 text-center mt-16'>
                <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold'>Weather</h1>
                <p className='text-sm xl:text-base tracking-wide'>Beautifully minimal weather data, engineered for the modern web.</p>

                <SearchBar />
            </div>

            <FeaturesCard />

        </div>
    );
}
 
export default EmptyState;