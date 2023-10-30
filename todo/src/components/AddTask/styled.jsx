import {styled} from 'styled-components'

export const AddTaskContainer = styled.div`

    form{
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    input {
        flex-basis: 50%;
    }
    input,
    select,
    button {
        padding: 7px;
        border-radius: 5px;
    }

    button{
        background-color: #609d1d;
    }
`