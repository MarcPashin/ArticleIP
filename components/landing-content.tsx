"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Play, RefreshCcw, Search } from 'lucide-react';
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Footer from "./footer";

export const LandingContent = () => {
    
    const JobRankingBox = () => {
        const [status, setStatus] = useState('Rank');
        const [ranked, setRanked] = useState(0);
      

        const props = useSpring({
            number: ranked,
            from: { number: 0 },
            config: { duration: 2500 }, // Adjust duration for smoothness
            onRest: () => {
                if (status === 'Completed') {
                   ;
                }
            }
        });

        const handleRank = () => {
            setStatus('Pending');
            setTimeout(() => {
                setStatus('Completed');
                setRanked(135); // This line will ensure the rank is updated to 135
            }, 2000); // Simulate ranking delay
        };

        const handleReset = () => {
            setRanked(0);
            setStatus('Rank');
           
        };

        return (
            <div className="border rounded-lg p-6 shadow-sm space-y-4">
                <h2 className="text-xs md:text-sm text-gray-350 mb-2 bg-gray-700 rounded-full px-4 py-2 inline-block">Workflow</h2>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Effortless bulk screening</h3>
                <p className="text-sm md:text-base text-gray-300 mb-4">
                    With one click automatically screen and rank hundreds of candidates in a matter of seconds.
                </p>
                {/* Job Ranking Box */}
                <div className="border rounded-lg p-4 shadow-sm relative">
                   
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        {/* Job Title and Candidate Count */}
                        <div className="flex items-center space-x-3 col-span-1 md:col-span-1">
                            <div className="flex flex-col items-start">
                                <div className="text-lg font-bold">CTO</div>
                                <div className="text-sm text-gray-500">Job Title</div>
                            </div>
                        </div>

                        {/* Candidates Count with Animation */}
                        <div className="col-span-1 md:col-span-2 text-center">
                            <p className="text-lg">
                                <animated.span className={`font-semibold ${props.number.to(n => n === 0 ? 'text-red-600' : (n === 135 ? 'text-green-600' : 'text-yellow-600'))}`}>
                                    {props.number.to(n => Math.floor(n))}
                                </animated.span>
                                /135 Candidates Ranked
                            </p>
                            <div className="text-sm text-gray-500">
                                Total Candidates
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-end">
                            {status === 'Rank' ? (
                                <Button
                                    variant="blue"
                                    className="text-sm px-4 py-2 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300 ease-in-out"
                                    onClick={handleRank}
                                >
                                    Rank
                                </Button>
                            ) : status === 'Pending' ? (
                                <Button
                                    variant="blue"
                                    className="text-sm px-4 py-2 rounded-lg font-semibold bg-yellow-500 text-white transition duration-300 ease-in-out"
                                    disabled
                                >
                                    Pending...
                                </Button>
                            ) : (
                                <Button
                                    variant="blue"
                                    className="text-sm px-4 py-2 rounded-lg font-semibold bg-green-400 text-white transition duration-300 ease-in-out"
                                    disabled
                                >
                                    Completed
                                </Button>
                            )}
                            <Button
                                variant="blue"
                                className="text-sm px-4 py-2 rounded-lg font-semibold bg-gray-300 text-gray-800 hover:bg-gray-400 transition duration-300 ease-in-out"
                                onClick={handleReset}
                            >
                                <RefreshCcw className="h-4 w-4 inline" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gray-900 text-white p-4 md:p-8 space-y-8">
        

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <h1 className="text-2xl md:text-4xl font-bold text-center pt-25 mt-15 mb-2">Hire top candidates faster</h1>
                <p className="text-center text-sm md:text-base text-gray-300">
                    by using HireAI&apos;s AI powered Applicant Tracking System.
                </p>
            <br></br>
            <br></br>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-4 md:p-6 shadow-sm">
            <h2 className="text-xs md:text-sm text-gray-350 mb-2 bg-gray-700 rounded-full px-4 py-2 inline-block">AI Voice</h2>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Natural-sounding AI</h3>
            <p className="text-sm md:text-base text-gray-300 mb-4">
                Deliver a conversational experience that feels genuine and human-like with the efficiency of automation.
            </p>
            <div className="bg-gray-900 text-white p-4 space-y-4">
               <div className="flex items-center space-x-2">
    <div className="bg-gray-800 rounded-sm p-2 flex-1">  {/* Added flex-1 */}
        <div className="h-8 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                {[...Array(25)].map((_, i) => {
                    const randomFactor = Math.random();
                    const maxHeight = 15 + randomFactor * 5;
                    const minHeight = 1 + randomFactor * 2;
                    return (
                        <rect 
                            key={i} 
                            x={i * 4} 
                            y={10} 
                            width="3" 
                            height="0" 
                            fill="#4F46E5" 
                            opacity="0.7"
                        >
                            <animate 
                                attributeName="height" 
                                values={`${minHeight};${maxHeight};${minHeight}`}
                                dur={`${0.3 + randomFactor * 0.3}s`}
                                repeatCount="indefinite"
                                begin={`${i * 0.04}s`}
                            />
                            <animate 
                                attributeName="y" 
                                values={`${10 - minHeight / 2};${10 - maxHeight / 2};${10 - minHeight / 2}`}
                                dur={`${0.3 + randomFactor * 0.3}s`}
                                repeatCount="indefinite"
                                begin={`${i * 0.04}s`}
                            />
                        </rect>
                    );
                })}
            </svg>
        </div>
    </div>
    <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300 ease-in-out py-2 flex-1"> {/* Added flex-1 */}
        Demo coming soon
    </Button>
</div>
</div>

                </div>

                <JobRankingBox />
            </div>

            <div className="border rounded-lg p-4 md:p-6 shadow-sm">
    <h2 className="text-lg md:text-xl font-bold mb-4 bg-gray-700 rounded-full px-4 py-2 inline-block">
        Elite Talent Management System
    </h2>
    <div className="border rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-gray-800 p-2 md:p-4 font-semibold text-xs md:text-sm">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-400 hover:bg-gray-700 p-2 rounded transition-colors duration-300">
                <span>CTO</span>
                <ChevronDown className="h-4 w-4" />
            </div>
            <div>Status</div>
            <div className="hidden md:block">Interview Round 1</div>
            <div className="hidden md:block">Grade</div>
        </div>

        {/* Candidate Rows */}
        {[
            { initials: 'TB', name: 'Taylor Bradshaw', email: 'tbrad@apple.com', status: 'Passed', grade: 'A+ (97%)', gradeColor: 'text-green-600' },
            { initials: 'JL', name: 'Jing Liu', email: 'jing.liu@nvidia.com', status: 'Passed', grade: 'A (94%)', gradeColor: 'text-green-500' },
            { initials: 'PR', name: 'Priya Rao', email: 'prao@nasa.org', status: 'Passed', grade: 'A- (90%)', gradeColor: 'text-green-400' },
            { initials: 'LW', name: 'Li Wei', email: 'l.wei22@stanford.edu', status: 'Failed', grade: 'B+ (87%)', gradeColor: 'text-yellow-500' },
            { initials: 'CS', name: 'Charlotte Smith', email: 'csmith@amd.com', status: 'Failed', grade: 'B (85%)', gradeColor: 'text-yellow-600' }
        ].map((candidate, index) => (
            <div key={index} className={`grid grid-cols-2 md:grid-cols-4 p-4 items-center border-t ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}`}>
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                        {candidate.initials}
                    </div>
                    <div>
                        <p>{candidate.name}</p>
                        <p className="text-xs md:text-sm text-gray-500">{candidate.email}</p>
                    </div>
                </div>
                <div className="text-center">
                    <span
                        className={`px-2 py-1 rounded-full text-xs md:text-sm ${
                            candidate.status === 'Passed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                        }`}
                    >
                        {candidate.status}
                    </span>
                </div>
                <div className="flex space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded">
                        <Play className="h-4 w-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded">
                        <Search className="h-4 w-4" />
                    </button>
                </div>
                <div className={`font-semibold ${candidate.gradeColor} md:pl-6`}>
                    {candidate.grade}
                </div>
            </div>
    
    
    ))}




  </div>
    </div>
    
            
<div className="border rounded-lg p-4 md:p-6 shadow-sm">
    <div className="bg-gray-900 text-white p-4 md:p-8 rounded-lg shadow-lg">
        <div className="mb-6">
            <h2 className="text-xs md:text-sm text-gray-200 mb-2 bg-gray-700 rounded-full px-4 py-2 inline-block">
                Third-party integrations
            </h2>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Integrate with existing systems</h3>
            <p className="text-sm md:text-base text-gray-300">
                Sync, track and manage candidates across interview stages and systems easily.
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center bg-gray-100 p-4 rounded-md">
                <img src="/linkedin.png" alt="LinkedIn" className="h-12" />
            </div>
            <div className="flex items-center justify-center bg-gray-100 p-4 rounded-md">
                <img src="/indeedlogo.png" alt="Indeed" className="h-12" />
            </div>
            
      

        
    </div>
</div>
</div>

    
        
    


<Footer />
                </div>

                
    );   
};


export default LandingContent;
