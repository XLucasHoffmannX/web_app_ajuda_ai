import React, { SyntheticEvent, useContext } from 'react'
import Wrapper from '../../components/layout/Wrapper'
import { Rating } from '@material-ui/lab';

import './satisfaction.css';
import changeInputRecursive from '../../../app/helpers/ChangeInputRecursive';
import { ContextState } from '../../../context/DataProvider';
import axios from 'axios';

export default function Satisfaction() {
	const state: any = useContext(ContextState);
	const [token] = state.token;
	const [lock, setLock] = React.useState(true);

	const [value, setValue] = React.useState<number>(1);
	const [info, setInfo] = React.useState<any>({
		provider: "",
		plan: ""
	});

	const changeInput = (e: React.SyntheticEvent) => changeInputRecursive(e, info, setInfo);

	React.useEffect(() => {
		const getClientExists = async () => {
			await axios.post("https://me-ajuda-ai.herokuapp.com/api/getclient", {
				client_id: token
			}).then((res) => {
				if (res.data === 'true') {
					setLock(true);
				} else {
					setLock(false);
				}
			}).catch((e) => {
				if (e) document.location.href = '/options'
			});
		}
		getClientExists();

	}, [token]);

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();

		if (token) {
			axios.post('https://me-ajuda-ai.herokuapp.com/api/provider', {
				client_id: token,
				provider: String(info.provider).toLowerCase(),
				plan: info.plan,
				rate: value > 1 ? value : 1
			}).then((res) => {
				if (res.status === 200 || res.status === 201) {
					document.location.href = '/satisfaction/providers'
				}
			}).catch((e) => {
				if (e.msg) alert(e.msg);
			});
		}
	}


	return (
		<Wrapper title='Satisfação com o provedor'>
			{
				!lock ?
					<div className='satisfaction_box'>
						<div className='box_provider'>
							<h3 className='realized'>Pesquisa já foi realizada!</h3>
						</div>
					</div>
					:
					<div className='satisfaction_box'>
						<div className='box_provider'>
							<form onSubmit={handleSubmit}>
								<div className='controllerForm mt-3'>
									<label className='form-label'>Informe seu provedor?</label>
									<input type="text" style={{ textTransform: "capitalize" }} className='form-control' name='provider' value={info.provider} onChange={changeInput} required />
								</div>
								<div className='controllerForm mt-3'>
									<label className='form-label'>Plano contratado?</label>
									<input type="number" className='form-control' name='plan' value={info.plan} onChange={changeInput} required />
								</div>
								<div className='controllerForm mt-3'>
									<label className='form-label field'>Qual foi sua experiência?</label>
								</div>
								<div className='rating'>
									<Rating
										name="simple-controlled"
										value={value}
										onChange={(event, newValue) => {
											setValue(Number(newValue));
										}}
									/>
								</div>
								<div className='btn_box'>
									<div className='btn_primary_box btn_load mt-4'>
										<button type='submit'>Confirmar</button>
									</div>
								</div>
							</form>
						</div>
					</div>
			}
		</Wrapper>
	)
}
