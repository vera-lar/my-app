'use client';
import { useEffect, useState } from "react";

const LearnPage:React.FC = () => {
    const [data, setData] = useState<Record<string,any>[]>([]);
    useEffect(() => {
        const data:Record<string,any>[] = [
            { id: 1, name: 'React', description: 'A JavaScript library for building user interfaces' },
            { id: 2, name: 'Next.js', description: 'A React framework for server-side rendering and static site generation' },
            { id: 3, name: 'TypeScript', description: 'A typed superset of JavaScript that compiles to plain JavaScript' },
        ];
        setData(data);
    }, []);
    const updateData = () => {
        const newData:Record<string,any>[] = [
            { id: 1, name: 'React', description: 'A JavaScript library for building user interfaces 2' }, 
            { id: 2, name: 'Next.js', description: 'A React framework for server-side rendering and static site generation 2' },  
            { id: 3, name: 'TypeScript', description: 'A typed superset of JavaScript that compiles to plain JavaScript 2' },
            { id: 4, name: 'Tailwind CSS', description: 'A utility-first CSS framework for rapid UI development 2' },
        ];
        setData(newData);
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Learn</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {data.map((item) => (
                        <li key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-indigo-500">
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">{item.name}</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </li>
                    ))}
                </ul>
                <button onClick={updateData} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200">
                    Update Data
                </button>
            </div>
        </div>
    );
}
export default LearnPage;