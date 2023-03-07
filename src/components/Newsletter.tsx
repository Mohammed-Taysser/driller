import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';

function Newsletter() {
	return (
		<section className='subscribe-box-section py-5'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-md-6 my-3'>
						<div>
							<p className='subscribe-box-text text-muted'>
								READY FOR A SUBSCRIPTION?
							</p>
							<h4 className='subscribe-box-title h1'>
								Subscribe Our Latest News
							</h4>
						</div>
					</div>
					<div className='col-md-6 my-3'>
						<form className='newsletter-form '>
							<div className='row align-items-center'>
								<div className='col-md-7'>
									<input
										className='form-control'
										type='email'
										placeholder='Enter Email Address'
									/>
								</div>
								<div className='col-md-5'>
									<button type='submit' className='btn-aurora'>
										SUBSCRIBE
										<HiCheckCircle className='mx-2' />
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Newsletter;
