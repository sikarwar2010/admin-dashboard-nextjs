"use client";
import React, { Fragment } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { data } from "@/data/analytics";

const AnalyticsCharts = () => {
    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <CardTitle>Analytics for this Year</CardTitle>
                    <CardDescription>View for Per Month</CardDescription>
                </CardHeader>
                <CardContent>
                    <div style={{ width: "100%", height: 300 }}>
                        <ResponsiveContainer>
                            <LineChart width={300} height={1100} data={data}>
                                <Line type={"monotone"} dataKey={"pv"} stroke={"#8884d8"} />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis dataKey={"name"} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </Fragment>
    );
};

export default AnalyticsCharts;
