'use client';

import Image from "next/image";
export default function ImageDebug() {
  const imagePaths = [
    "/Assets/carousel/doctors.webp",
    "/Assets/carousel/doc_introment.webp", 
    "/Assets/carousel/energency.webp",
    "/Assets/carousel/doc3.webp",
    "/Assets/carousel/doc2.webp"
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Image Debug Test</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {imagePaths.map((path, index) => (
          <div key={index} className="border p-2">
            <p className="text-sm font-mono mb-2">{path}</p>
            <Image
              src={path}
              alt={`Test ${index}`}
              className="w-full h-32 object-cover border"
              width={100}
              height={100}
              onLoad={() => console.log('✅ Loaded:', path)}
              onError={(e) => {
                console.error('❌ Failed:', path);
                e.target.style.backgroundColor = 'red';
                e.target.style.color = 'white';
                e.target.textContent = 'FAILED TO LOAD';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
