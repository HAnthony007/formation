"use client"
import { course } from '@/configs/dataTest'
import { List, Card } from 'antd'
import { Input } from '../ui/input'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'

export default function ListCourse() {
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        if (search !== '') setIsLoading(true)

        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 500);
        return () => clearTimeout(timer)
    }, [search])

    const filterStudents = useMemo(() => {
        
        if (!search) return course;
        
        return course.filter((c) => 
            c.title.toLowerCase().includes(search.toLowerCase()) ||
            c.description.toLowerCase().includes(search.toLowerCase()) ||
            c.difficulty.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            c.category.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
    }, [search])

    return (
        <>
            <Input type='search' placeholder='filter students...' className='w-1/3'
                onChange={(e) => setSearch(e.target.value)}
            />
            <List
                loading={isLoading}
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    lg: 2,
                    xl: 3,
                    xxl: 4,
                }}
                className='h-full flex flex-1'
                dataSource={filterStudents}
                renderItem={(item) => (
                    <List.Item >
                        <Card title={item.title}
                            hoverable={true}
                            onClick={() => toast.success("Vous avez cliequer sur le cours " + item.title)}
                            className='w-[380px] min-w-full'
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                        >
                            <p>{item.description}</p>
                        </Card>
                    </List.Item>
                )}
            />
        </>
    )
}