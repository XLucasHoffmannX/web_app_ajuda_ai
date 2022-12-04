import React from 'react'
import Wrapper from '../../../components/layout/Wrapper';
import { useParams } from 'react-router-dom';

import '../best-search.css';
import { Result, ResultExpected, ResultLinks } from '../../../../app/api/Result';

export default function RecommendedList() {
    const params: any = useParams();
    const type = params.type;

    const result: ResultExpected | any = Result(type);
    const linkUse: string | any = ResultLinks(type);

    console.log(result);
    return (
        <Wrapper title='Melhor equipamento'>
            <div className='best_search_box'>
                <div className='search_e2'>
                    <h2>Recomendação para a sua rede</h2>
                    <div className='search_e2_info'>
                        <h2>Especificações do equipamento</h2>
                        <div className='result'>
                            <span>{result.pattern}</span>
                            <span>{result.portas}</span>
                            <span>{result.dual}</span>
                        </div>
                        <div className='all_devices'>
                            <a href={linkUse}>
                                Ver lista de equipamentos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
