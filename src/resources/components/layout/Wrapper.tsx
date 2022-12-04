import React, { useContext } from 'react';
import { ContextState } from '../../../context/DataProvider';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { Link, useHistory } from 'react-router-dom';
import './wrapper.css';

//style
import './wrapper.css';

type Props = {
    children?: React.ReactNode,
    title: string
}

const Wrapper: React.FC<Props> = ({ children, title }: any) => {
    let history = useHistory();
    const state: any = useContext(ContextState);

    return (
        <div className='container_app'>
            <div className='container_init_app'>
                <div className='container_init_app_header my-4'>
                    <HiOutlineChevronLeft onClick={() => history.goBack()} />
                    <span>{title}</span>
                </div>
                <div className='container_init_app_main'>
                    {children}
                </div>
                <div className='container_init_app_footer my-4'>
                    
                </div>
            </div>
        </div>
    )
}

export default Wrapper;
