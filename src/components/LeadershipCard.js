export default function LeadershipCard({
  name, 
  title, 
  description, 
  src
}) {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
    <div className="relative overflow-hidden">
      <img
        src={src}
        alt={name}
        className="w-full h-80 object-cover transform transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/800x500/0082c3/ffffff?text=Doctor';
        }}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
    </div>
    <div className="p-5">
      <h4 className="text-xl font-bold text-gray-900">{name}</h4>
      <p className="text-accent-cyan font-semibold mb-2">{title}</p>
      <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
       {description}
      </p>
    </div>
  </div>
  );
}
