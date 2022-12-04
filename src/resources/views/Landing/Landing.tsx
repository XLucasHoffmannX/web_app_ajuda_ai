import Logo from '../../assets/images/meajudai.svg';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './landing.css';

export default function Landing() {

    return (
        <div className="landing_box">
            <div className="init_box">
                <div className='init_box_control'>
                    <div className='init_box_logo d-flex flex-column align-items-center'>
                        <img src={Logo} alt="" />
                        <span className='init_box_subtitle mt-4'>Encontre o melhor roteador para sua conexão</span>
                    </div>
                    <div className='init_box_opt'>
                        <div className='btn_primary_box'>
                            <Link to="/options">
                                <span>Vamos Lá</span>
                            </Link>
                        </div>
                        <span className='init_box_subtitle mt-4 contri'>
                            Mais de 100 pessoas contribuidas
                            <FaHeart />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
