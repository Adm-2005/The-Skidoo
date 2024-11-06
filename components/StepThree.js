const stepThree = () => (
    <div className="flex flex-col gap-3 bg-[#FFF4DB] h-full w-full mx-auto items-center justify-center">
        <h2 className="font-bold font-itim text-xl text-center lg:text-2xl text-[#F2AC78]">Step 3 / 3: Travel Preferences</h2>
        <div className="flex flex-col gap-2 w-full max-w-md">
            <label className="text-[#F2AC78] font-poppins">Preferred Mode of Transport</label>
            <select
                className="w-full p-2 shadow-md border border-[#F2AC78] focus:outline-none focus:border-[#F2AC78] focus:ring-2 focus:ring-[#F2AC78] bg-[#FFF4DB] rounded-md"
            >
                <option value="">Select mode</option>
                <option value="Airlines">Airlines</option>
                <option value="Railway">Railway</option>
                <option value="Bus">Bus</option>
                <option value="Car">Car</option>
                <option value="Bicycle">Bicycle</option>
                <option value="Walking">Walking</option>
            </select>
        </div>
        <div className="flex flex-col gap-2 w-full max-w-md">
            <label className="text-[#F2AC78] font-poppins">Accommodation Type</label>
            <select
                className="w-full p-2 shadow-md border border-[#F2AC78] focus:outline-none focus:border-[#F2AC78] focus:ring-2 focus:ring-[#F2AC78] bg-[#FFF4DB] rounded-md"
            >
                <option value="">Select accommodation</option>
                <option value="Hotel">Hotel</option>
                <option value="Hostel">Hostel</option>
                <option value="Vacation Rental">Vacation Rental</option>
                <option value="Camping">Camping</option>
                <option value="Resort">Resort</option>
            </select>
        </div>
        <div className="flex flex-col gap-2 w-full max-w-md">
            <label className="text-[#F2AC78] font-poppins">Activities of Interest</label>
            <div className="flex flex-col gap-1">
                <label>
                    <input type="checkbox" value="Adventure" />
                    Adventure Activities
                </label>
                <label>
                    <input type="checkbox" value="Culture" />
                    Cultural Experiences
                </label>
                <label>
                    <input type="checkbox" value="Relaxation" />
                    Relaxation
                </label>
                <label>
                    <input type="checkbox" value="Food Tours" />
                    Food Tours
                </label>
                <label>
                    <input type="checkbox" value="Nightlife" />
                    Nightlife
                </label>
                <label>
                    <input type="checkbox" value="Nature" />
                    Nature Exploration
                </label>
            </div>
        </div>
        <div className="flex flex-col gap-2 w-full max-w-md">
            <label className="text-[#F2AC78] font-poppins">Dietary Restrictions</label>
            <select
                className="w-full p-2 shadow-md border border-[#F2AC78] focus:outline-none focus:border-[#F2AC78] focus:ring-2 focus:ring-[#F2AC78] bg-[#FFF4DB] rounded-md"
            >
                <option value="">Select dietary needs</option>
                <option value="None">None</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Gluten-Free">Gluten-Free</option>
                <option value="Nut Allergies">Nut Allergies</option>
            </select>
        </div>
    </div>
);

export default stepThree;
