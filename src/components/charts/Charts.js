import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';
import './Charts.css'

const Charts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-slate-700 py-4'>Charts</h1>
            <div className='md:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 content-center gap-2'>
                <div>
                    <h3 className='text-2xl text-center text-slate-500 font-semibold'>Month wise Sell</h3>
                    <div style={{ width: '100%', height: 400 }}>
                        <ResponsiveContainer>
                            <LineChart data={data}
                                margin={{ top: 20, right: 15, left: 5, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl text-center text-slate-500 font-semibold'>Month wise Sell</h3>
                    <div style={{ width: '100%', height: 400 }}>
                        <ResponsiveContainer>
                            <AreaChart data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey='revenue' stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Charts;