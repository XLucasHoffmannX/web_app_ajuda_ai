import React from 'react'
import Wrapper from '../../../components/layout/Wrapper'
import { AiFillStar } from 'react-icons/ai'

import '../satisfaction.css';
import changeInputRecursive from '../../../../app/helpers/ChangeInputRecursive';
import axios from 'axios';

export default function ListProviders() {
    const [providers, setProviders] = React.useState<any[]>();
    const [search, setSearch] = React.useState({
        text: ''
    });

    const changeInput = (e: React.SyntheticEvent) => changeInputRecursive(e, search, setSearch);

    React.useEffect(() => {
        const getClientExists = async () => {
            if (search.text) {
                axios.get(`http://192.168.0.114:3040/api/provider?provider=${search.text}`).then((res) => {
                    if (res.data) {
                        setProviders(res.data);
                    }
                });
            } else {
                axios.get(`http://192.168.0.114:3040/api/provider/`).then((res) => {
                    if (res.data) {
                        setProviders(res.data);
                    }
                });
            }
        }

        getClientExists();
    }, [search.text]);

    return (
        <Wrapper title='Pontuação de provedores'>
            <div className='satisfaction_box'>
                <div className='box_provider'>
                    <form action="">
                        <div className='controllerForm mt-3'>
                            <input type="text" className='form-control' placeholder='Pesquisar provedor...' name='text' value={search.text} onChange={changeInput} />
                        </div>
                    </form>
                    {
                        providers?.map((prov, id) => (
                            <div className='box_list' key={id}>
                                <h2 style={{ textTransform: 'capitalize' }}>{prov.provider}</h2>
                                <span>Plano de {prov.plan}mbps</span>
                                <span className='box_list_start'>
                                    <AiFillStar />
                                    {prov.rate}
                                </span>
                            </div>
                        ))
                    }
                </div >
            </div>
        </Wrapper>
    )
}
