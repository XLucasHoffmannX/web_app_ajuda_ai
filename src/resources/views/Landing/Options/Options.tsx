import React from 'react'
import { Link } from 'react-router-dom';
import Wrapper from '../../../components/layout/Wrapper';

import './options.css';

export default function Options() {
    return (
        <Wrapper title={'Escolha uma opção'}>
            <div className='option_box mt-5'>
                <div className='option_box_btn'>
                    <Link to="/test-conection">Teste de conexão</Link>
                </div>
                <div className='option_box_btn'>
                    <Link to="/best-search">Ver melhor equipamento para minha conexao</Link>
                </div>
                <div className='option_box_btn'>
                    <Link to="/satisfaction">Pesquisa de satisfação do meu provedor</Link>
                </div>
                <div className='option_box_btn'>
                    <Link to="/satisfaction/providers">Ver pontuação provedores</Link>
                </div>
            </div>
        </Wrapper>
    )
}
