"use client"
import { course, courseType } from '@/configs/dataTest'
import { Button, Space, Table, TableColumnsType } from 'antd'

export default function CoursesRequest() {
    const columns: TableColumnsType<courseType> = [
        {
            title: 'Id',
            dataIndex: 'idcourse',
            key: 'idcourse',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category'
        },
        {
            title: 'Difficulty',
            dataIndex: 'difficulty',
            key: 'email'
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration'
        },
        {
            title: 'Action',
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Button color='primary' type='primary'>Accepte {record.difficulty}</Button>
                    <Button danger type='primary'>Delete</Button>
                </Space>
            )
        }
    ]
    return (
        <>
            <Table columns={columns} dataSource={course} />
        </>
    )
}