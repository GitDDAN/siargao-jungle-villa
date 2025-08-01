import { Badge } from "@/components/ui/badge";

const CurrentResidents = () => {
  const residents = [
    { name: "Daniel", age: 25, country: "Germany", initials: "DG" },
    { name: "Ali", age: 28, country: "Australia", initials: "AA" },
    { name: "Sam", age: 24, country: "USA", initials: "SU" },
    { name: "Joma", age: 26, country: "Philippines", initials: "JP" }
  ];

  return (
    <div className="flex items-center gap-3 mb-6 text-white/90 text-sm">
      <span className="text-tropical-green-light font-semibold">Currently staying:</span>
      <div className="flex items-center gap-2 flex-wrap">
        {residents.map((resident, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-tropical-green to-tropical-green-light flex items-center justify-center text-white text-xs font-bold border-2 border-white/20">
                {resident.initials}
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border border-white animate-pulse"></div>
            </div>
            <span className="text-white/80">
              {resident.name} ({resident.age}, {resident.country})
            </span>
            {index < residents.length - 1 && (
              <span className="text-white/40 mx-1">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentResidents;