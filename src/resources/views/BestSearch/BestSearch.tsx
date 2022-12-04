import React, { SyntheticEvent } from 'react';
import changeInputRecursive from '../../../app/helpers/ChangeInputRecursive';
import Wrapper from '../../components/layout/Wrapper';
import axios from 'axios';

import './best-search.css';

interface AnswersInterface {
    plan: number,
    support: number,
    devices: number
}

export default function BestSearch() {
    const [answers, setAnswers] = React.useState<AnswersInterface>({
        plan: 0,
        support: 0,
        devices: 0
    });

    const [load, setLoad] = React.useState<boolean>(false);

    const changeInput = (e: React.SyntheticEvent) => changeInputRecursive(e, answers, setAnswers);

    const handleSubmit = async (e: SyntheticEvent) => {
        setLoad(true);
        e.preventDefault();

        await axios.post('https://me-ajuda-ai.herokuapp.com/api/best', { ...answers })
            .then(res => {
                if (res.data.msg) {
                    document.location.href = `/best-search/result/${res.data.msg}`
                    setLoad(false);
                }
            });

    }

    return (
        <Wrapper title='Melhor Equipamento'>
            <div className='best_search_box'>
                <div className='search_e1'>
                    <h2 >Formulário de Pesquisa</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='controllerForm mt-3'>
                            <label className='form-label'>Qual velocidade do seu plano?</label>
                            <select name="plan" defaultValue={answers.plan} onChange={changeInput} className='form-control' style={{ color: 'var(--grey-secondary-font)' }} required>
                                <option value={Number(0)}>Menos ou igual a 60 megas</option>
                                <option value={Number(1)}>80 megas</option>
                                <option value={Number(2)}>Mais que 100 megas</option>
                            </select>
                        </div>
                        <div className='controllerForm mt-3'>
                            <label className='form-label'>Dispositivos suportam 5ghz?</label>
                            <select name="support" className='form-control' defaultValue={answers.support} onChange={changeInput} style={{ color: 'var(--grey-secondary-font)' }} required>
                                <option value={Number(0)}>Não</option>
                                <option value={Number(1)}>Não sei</option>
                                <option value={Number(2)}>Sim</option>
                            </select>
                        </div>
                        <div className='controllerForm mt-3'>
                            <label className='form-label'>Quantos dispositivos conectados?</label>
                            <select name="devices" defaultValue={answers.devices} onChange={changeInput} className='form-control' style={{ color: 'var(--grey-secondary-font)' }} required>
                                <option value={Number(0)}>1</option>
                                <option value={Number(1)}>2</option>
                                <option value={Number(2)}>3 ou mais</option>
                            </select>
                        </div>
                        {
                            load ?
                                <div className='btn_box'>
                                    <div className='btn_primary_box mt-4'>
                                        <button type='submit'>Aguarde ...</button>
                                    </div >
                                </div>
                                :
                                <div className='btn_box'>
                                    <div className='btn_primary_box btn_load mt-4'>
                                        <button type='submit'>Confirmar</button>
                                    </div>
                                </div>
                        }
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}
