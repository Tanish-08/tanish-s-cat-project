
import React, { useState, useCallback } from 'react';
import { getFoodRecommendations } from '../services/geminiService';
import { FoodRecommendation } from '../types';
import Card from './shared/Card';
import Button from './shared/Button';
import Spinner from './shared/Spinner';
import { Check, Bowl } from './Icons';

const catAges = ['Kitten (0-1 year)', 'Adult (1-7 years)', 'Senior (7+ years)'];
const healthConcernsOptions = ['Weight Management', 'Sensitive Stomach', 'Hairball Control', 'Urinary Health', 'Skin & Coat Health'];

const FoodAdvisor: React.FC = () => {
  const [age, setAge] = useState<string>(catAges[1]);
  const [breed, setBreed] = useState<string>('Domestic Shorthair');
  const [concerns, setConcerns] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<FoodRecommendation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleConcernToggle = (concern: string) => {
    setConcerns(prev => 
      prev.includes(concern) ? prev.filter(c => c !== concern) : [...prev, concern]
    );
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    try {
      const results = await getFoodRecommendations(age, breed, concerns);
      setRecommendations(results);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [age, breed, concerns]);

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-brand-dark">AI-Powered Food Advisor</h2>
        <p className="mt-2 text-lg text-brand-text max-w-3xl mx-auto">
          Tell us about your cat, and our AI will suggest the best food options for their specific needs.
        </p>
      </div>
      
      <Card className="max-w-4xl mx-auto mb-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="age" className="block text-sm font-bold text-brand-dark mb-2">Cat's Age</label>
              <select id="age" value={age} onChange={e => setAge(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition">
                {catAges.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="breed" className="block text-sm font-bold text-brand-dark mb-2">Cat's Breed</label>
              <input type="text" id="breed" value={breed} onChange={e => setBreed(e.target.value)} placeholder="e.g., Siamese, Maine Coon" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition"/>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-bold text-brand-dark mb-2">Health Concerns (optional)</label>
            <div className="flex flex-wrap gap-3">
              {healthConcernsOptions.map(concern => (
                <button key={concern} type="button" onClick={() => handleConcernToggle(concern)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${concerns.includes(concern) ? 'bg-brand-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                  {concern}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Spinner /> : 'Get Recommendations'}
            </Button>
          </div>
        </form>
      </Card>

      {error && <div className="text-center text-red-600 bg-red-100 p-4 rounded-lg max-w-4xl mx-auto">{error}</div>}

      {recommendations.length > 0 && (
        <div className="mt-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-brand-dark">Your Purrfect Matches</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {recommendations.map((rec, index) => (
                <Card key={index} className="flex flex-col h-full">
                    <div className="flex-grow">
                        <span className="inline-block bg-orange-200 text-brand-primary text-xs font-bold px-2 py-1 rounded-full mb-2">{rec.type} Food</span>
                        <h4 className="text-xl font-bold text-brand-dark">{rec.brandName}</h4>
                        <p className="text-md text-brand-text mb-4">{rec.foodName}</p>
                        <p className="text-sm text-gray-600 mb-4">{rec.description}</p>
                    </div>
                    <div>
                        <h5 className="font-bold mb-2 text-brand-dark">Key Benefits:</h5>
                        <ul className="space-y-1">
                            {rec.keyBenefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-brand-text">
                                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>
            ))}
            </div>
        </div>
      )}
      
      {!isLoading && recommendations.length === 0 && !error && (
        <div className="text-center py-10">
          <Bowl className="w-16 h-16 mx-auto text-gray-300" />
          <p className="mt-4 text-gray-500">Your cat's personalized recommendations will appear here.</p>
        </div>
      )}

    </div>
  );
};

export default FoodAdvisor;
