import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { cn } from '../../helpers/classname';

import './index.scss';

const b = cn('menu');

export default class Menu extends React.Component {
    render() {
        const items = ['csv'];

        return (
            <List className={b()}>
                {items.map(item => {
                    return (
                        <ListItem key={item}>
                            <Link href={`/${item}-config`}>
                                <Button variant="contained" color="secondary">{item}</Button>
                            </Link>
                        </ListItem>
                    );
                })}
            </List>
        );
    }
}
