import * as React from 'react';
import * as ReactDom from 'react-dom';
import axe from '@axe-core/react';

if (import.meta.env.DEV) {
	axe(React, ReactDom, 500);
}
