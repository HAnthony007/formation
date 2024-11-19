"use client"
import { user } from '@/configs/dataTest'
import { User } from '@/types/authentification'
import { Table, TableColumnsType } from 'antd'

export default function TrainerRequest() {
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
            <Table columns={columns} />
        </>
    )
}