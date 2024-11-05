import { IconContext } from "react-icons";

const travelOptions = [
  { href: '/icons/budget.png', type: 'Budget', description: 'Affordable and convenient trips' },
  { href: '/icons/romantic.png', type: 'Romantic', description: 'Perfect, romantic escape' },
  { href: '/icons/adventure.png', type: 'Adventure', description: 'Thrilling outdoor experiences' },
  { href: '/icons/culture.png', type: 'Culture', description: 'Explore traditions, history' },
  { href: '/icons/relaxation.png', type: 'Relaxation', description: 'Unwind, recharge, relax' },
  { href: '/icons/family.png', type: 'Family', description: 'Fun for people of all ages' },
  { href: '/icons/friends.png', type: 'Friends', description: 'Memorable times together' },
  { href: '/icons/solo.png', type: 'Solo', description: 'Independent, personal journeys' },
  { href: '/icons/corporation.png', type: 'Corporate', description: 'Focused, professional travel' },
  { href: '/icons/senior.png', type: 'Senior', description: 'Comfortable, accessible trips' }
];

  
  const StepTwo = ({ formData, handleChange }) => (
    <div className="flex flex-col gap-7 h-full justify-center items-center">
      <h1 className="text-2xl font-bold text-[#F2AC78]">Step 2 / 3: Choose Your Travel Type</h1>
      <div className="grid grid-cols-2 gap-2">
        {travelOptions.map((option) => (
          <div
            key={option.type}
            className={`flex justify-between items-center h-[80px] hover:bg-[#F2AC78] shadow-md rounded-lg p-4 ${
              formData.travelType === option.type ? 'active' : ''
            }`}
            onClick={() => handleChange('travelType', option.type)}
          >
            <div className="flex items-center w-2/5 justify-start gap-2">
              <img src={option.href} className="w-[20px] h-[20px]"></img>
              <h3>{option.type}</h3>
            </div>
            <p className="text-center leading-tight flex items-center justify-end w-[3/5]">{option.description}</p>
          </div>
        ))}
      </div>
    </div>
);
  
export default StepTwo;
  