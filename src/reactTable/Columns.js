import {format} from 'date-fns'

var items=[{value: 'text', label: 'text'}, {value: 'picklist', label: 'picklist'}, {value: 'date', label: 'date'}, {value: 'userlist', label: 'userlist'}, {value: 'checkbox', label: 'checkbox'}];

export const COLUMNS = [
    {
        Header:"Id",
        accessor:"id"
    },
    {
        Header:"First Name",
        accessor:"first_name"
    },
    {
        Header:"Last Name",
        accessor:"last_name"
    },
    {
        Header:"Email",
        accessor:"email"
    },
    {
        Header:"Date of Birth",
        accessor:"date_of_birth",
        Cell: ({value}) => { return format(new Date(value), 'MM/dd/yyyy')}
    },
    {
        Header:"Age",
        accessor:"age"
    },
    {
        Header:"Country",
        accessor:"country"
    },
    {
        Header:"Phone",
        accessor:"phone"
    }
]