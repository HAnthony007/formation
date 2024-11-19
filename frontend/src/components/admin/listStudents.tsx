"use client"
import { user } from '@/configs/dataTest'
import { User } from '@/types/authentification'
import { Avatar, List, TableColumnsType } from 'antd'
import { Input } from '../ui/input'
import { useEffect, useMemo, useState } from 'react'

export default function ListStudents() {
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
        if (!search) return user

        return user.filter((u) =>
            u.firstname.toLowerCase().includes(search.toLowerCase()) ||
            u.lastname.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
    }, [search])

    const columns: TableColumnsType<User> = [
        {
            title: 'Id',
            dataIndex: 'iduser',
            key: 'iduser',
        },
        {
            title: 'First Name',
            dataIndex: 'firstname',
            key: 'firstname'
        },
        {
            title: 'Last Name',
            dataIndex: 'lastname',
            key: 'lastname'
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status'
        },
    ]
    return (
        <>
            {/* <Table columns={columns} /> */}
            <Input type='search' placeholder='filter students...' className='w-1/3'
                onChange={(e) => setSearch(e.target.value)}
            />
            <List
                size='small'
                itemLayout="horizontal"
                dataSource={filterStudents}
                loading={isLoading}
                renderItem={(item, index) => (
                    <List.Item className='hover:shadow'>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                            title={<a href="https://ant.design">{item.firstname} {item.lastname}</a>}
                            description={item.email}
                        />
                    </List.Item>
                )}
            />
        </>
    )
}