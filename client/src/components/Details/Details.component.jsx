import React from 'react';
import { Component } from 'react';

import * as productService from '../../services/productService';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: [],
        }
    }

    componentDidMount() {
        productService.create()
    }
}