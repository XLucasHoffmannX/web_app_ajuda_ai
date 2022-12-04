import React from 'react'
import Wrapper from '../../components/layout/Wrapper';
import Lottie from 'react-lottie';
import Wifi from '../../assets/lottie/wifi-lottie.json'
import { HiOutlineCloudDownload, HiOutlineCloudUpload, HiOutlineSwitchHorizontal } from 'react-icons/hi';


import './conection-test.css';
import { Link } from 'react-router-dom';

export default function ConectionTest() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Wifi,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Wrapper title='Teste de conexão'>
            <div className='conection_test_box'>
                <div className='conection_test_box_card mt-4'>
                    <div className='conection_test_box_card_control'>
                        <iframe style={{ border: "none", width: '100%', height: '100%', minHeight: '280px', overflow: "hidden !important" }} src="//openspeedtest.com/Get-widget.php"></iframe>
                    </div>
                </div>
                <div className='btn_primary_box mt-5'>
                    <Link to="/test-conection" onClick={(e:any) => {
                        e.preventDefault();

                        window.location.href = '/test-conection'
                    }}>
                        <span>Realizar teste novamente</span>
                    </Link >
                </div >

            </div >
        </Wrapper >
    )
}
