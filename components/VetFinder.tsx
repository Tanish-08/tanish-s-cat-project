
import React from 'react';
import { Vet } from '../types';
import Card from './shared/Card';
import { Stethoscope } from './Icons';

const mockVets: Vet[] = [
  {
    id: 1,
    name: 'The Cat Clinic',
    address: '123 Whisker Lane, Meowville',
    phone: '555-123-4567',
    specialty: 'Feline Internal Medicine',
    image: 'https://placekitten.com/400/300',
  },
  {
    id: 2,
    name: 'Paws & Claws Veterinary',
    address: '456 Purrfect St, Catropolis',
    phone: '555-987-6543',
    specialty: 'General Feline Wellness',
    image: 'https://placekitten.com/401/300',
  },
  {
    id: 3,
    name: 'Happy Tails Animal Hospital',
    address: '789 Ball of Yarn Blvd, Kittenwood',
    phone: '555-555-1212',
    specialty: 'Feline Surgery & Dentistry',
    image: 'https://placekitten.com/400/301',
  },
   {
    id: 4,
    name: 'Feline Friends Vet Care',
    address: '101 Scratchpost Ave, Furrtown',
    phone: '555-222-3333',
    specialty: 'Senior Cat Care',
    image: 'https://placekitten.com/402/300',
  },
];

const VetFinder: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-brand-dark">Find a Veterinarian</h2>
        <p className="mt-2 text-lg text-brand-text max-w-2xl mx-auto">
          Discover trusted vets in your area who specialize in feline care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mockVets.map((vet) => (
          <Card key={vet.id} className="flex flex-col sm:flex-row gap-6">
            <img src={vet.image} alt={vet.name} className="w-full sm:w-1/3 h-48 sm:h-auto object-cover rounded-lg"/>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-brand-dark">{vet.name}</h3>
              <p className="text-brand-text mt-1">{vet.address}</p>
              <p className="text-brand-text">{vet.phone}</p>
              <div className="mt-4 inline-flex items-center gap-2 bg-orange-100 text-brand-primary font-bold px-3 py-1 rounded-full text-sm">
                <Stethoscope className="w-4 h-4" />
                <span>{vet.specialty}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VetFinder;
