'use client';
import React, { Fragment } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { DashboardCardProps } from '@/types';


const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
    return (
        <Fragment>
            <Card className='bg-slate-100 dark:bg-slate-800 p-4 pb-0'>
                <CardContent >
                    <h1 className='text-center text-3xl mb-4 font-bold text-slate-500 dark:text-slate-200'>{title}</h1>
                    <div className='flex justify-center items-center gap-5'>
                        {icon}
                        <h3 className='text-5xl font-bold text-slate-500 dark:text-slate-200'>{count}</h3>
                    </div>
                </CardContent>
            </Card>
        </Fragment>
    )
}

export default DashboardCard