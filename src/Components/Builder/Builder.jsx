import React, { Component } from 'react';
import { Query } from './Query';
import { Pagination } from './Pagination';

class Builder extends Component
{
    render() {
        return(
            <>
                <Query/>
                <Pagination />
            </>
        )
    }
}
export { Builder }