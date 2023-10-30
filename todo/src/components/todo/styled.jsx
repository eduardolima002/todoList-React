import { styled } from "styled-components";

export const TodoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f6f6f6;
    padding: 1.3rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,.2);

    & + & {
        margin-top: 3rem;
    }

    .button{
        margin-left: 10px;
        padding: 7px;
        border-radius: 5px;
        cursor: pointer;
    }

    .complete{
        background-color: #609d1d;
    }

    .completed {
        text-decoration: line-through;
    }

    .exclude {
       background-color: #dc4d1b;
    }

`