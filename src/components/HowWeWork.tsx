import { BsShieldCheck } from 'react-icons/bs';
import { MdOutlineConstruction, MdOutlineDesignServices } from 'react-icons/md';
import { RiFilePaper2Line } from 'react-icons/ri';

import overlay from '../assets/images/background/how-we-work-overlay.jpg';

function HowWeWork() {
	return (
		<section
			className='how-we-work p-5'
			style={{
				background: `center / cover no-repeat url(${overlay})`,
			}}
		>
			<div className='container my-5'>
				<div className='row justify-content-center align-items-center my-5'>
					<div className='col-md-6 my-3'>
						<div className='main-content'>
							<div className='title-area text-center'>
								<div className='sub-title'>
									<div className='shape left'>
										<div className='dots'></div>
									</div>
									HOW WE WORK
									<div className='shape right'>
										<div className='dots'></div>
									</div>
								</div>
								<div className='sec-title'>Our Work Process</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row justify-content-center align-items-center mt-5'>
					<div className='col-md-3 my-3 text'>
						<div className='process-card mx-auto'>
							<div className='process-card-icon'>
								<RiFilePaper2Line />
							</div>
							<h3 className='process-card-title'>Planning</h3>
							<p className='process-card-text'>
								Uniquely orchestrate seamless potentialities via real-time.
							</p>
						</div>
					</div>
					<div className='col-md-3 my-3 text'>
						<div className='process-card mx-auto second'>
							<div className='process-card-icon'>
								<MdOutlineDesignServices />
							</div>
							<h3 className='process-card-title'>Design</h3>
							<p className='process-card-text'>
								Uniquely orchestrate seamless potentialities via real-time.
							</p>
						</div>
					</div>
					<div className='col-md-3 my-3 text'>
						<div className='process-card mx-auto'>
							<div className='process-card-icon'>
								<MdOutlineConstruction />
							</div>
							<h3 className='process-card-title'>Construct</h3>
							<p className='process-card-text'>
								Uniquely orchestrate seamless potentialities via real-time.
							</p>
						</div>
					</div>
					<div className='col-md-3 my-3 text'>
						<div className='process-card mx-auto end'>
							<div className='process-card-icon'>
								<BsShieldCheck />
							</div>
							<h3 className='process-card-title'>Finishing</h3>
							<p className='process-card-text'>
								Uniquely orchestrate seamless potentialities via real-time.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HowWeWork;
