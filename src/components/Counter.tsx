import counterOverlay from '../assets/images/background/counter-overlay.jpg';

import counter1 from '../assets/images/background/counter/counter-1.svg';
import counter2 from '../assets/images/background/counter/counter-2.svg';
import counter3 from '../assets/images/background/counter/counter-3.svg';
import counter4 from '../assets/images/background/counter/counter-4.svg';

function Counter() {
	return (
		<section
			className='counter-card-wrap my-5 py-5'
			style={{
				background: `center / cover no-repeat  url(${counterOverlay})`,
			}}
		>
			<div className='container my-5'>
				<div className='row justify-content-between'>
					<div className='col-sm-6 col-md-3 my-3'>
						<div className='counter-card '>
							<div className='counter-card-icon'>
								<img src={counter1} alt='counter-1' />
							</div>
							<div className='media-body'>
								<h2 className='counter-card-number display-5 fw-bold'>
									<span className='counter-number'>2.2</span>K+
								</h2>
								<p className='counter-card-text'>Project Completed</p>
							</div>
						</div>
					</div>
					<div className='col-sm-6 col-md-3 my-3'>
						<div className='counter-card '>
							<div className='counter-card-icon'>
								<img src={counter2} alt='counter-2' />
							</div>
							<div className='media-body'>
								<h2 className='counter-card-number display-5 fw-bold'>
									<span className='counter-number'>3.1</span>K+
								</h2>
								<p className='counter-card-text'>Team Members</p>
							</div>
						</div>
					</div>
					<div className='col-sm-6 col-md-3 my-3'>
						<div className='counter-card '>
							<div className='counter-card-icon'>
								<img src={counter3} alt='counter-3' />
							</div>
							<div className='media-body'>
								<h2 className='counter-card-number display-5 fw-bold'>
									<span className='counter-number'>1.9</span>K+
								</h2>
								<p className='counter-card-text'>Clients Are Happy</p>
							</div>
						</div>
					</div>
					<div className='col-sm-6 col-md-3 my-3'>
						<div className='counter-card '>
							<div className='counter-card-icon'>
								<img src={counter4} alt='counter-4' />
							</div>
							<div className='media-body'>
								<h2 className='counter-card-number display-5 fw-bold'>
									<span className='counter-number'>1.1</span>K+
								</h2>
								<p className='counter-card-text'>Award Wins</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Counter;
