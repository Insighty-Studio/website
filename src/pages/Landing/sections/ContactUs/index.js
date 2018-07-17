import React, {PureComponent} from 'react';
import classnames from 'classnames';
import axios from 'axios/index';

import './index.styl';

import SectionHeading from 'components/Typography/SectionHeading';
import Footer from 'components/Footer';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';

class ContactUs extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			messageIsVisible: false,
			formIsSubmitted: false,
			name: '',
			email: '',
			phone: '',
			website: '',
			message: '',
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		const {
			name, email, phone, website, message
		} = this.state;
		const formData = JSON.stringify({
			attachments: [
				{
					color: '#000000',
					pretext: 'New Contact Us form request',
					author_name: `From: ${name}`,
					text: `*Email:* ${email}\n*Phone:* ${phone}\n*Website:* ${website}\n*Message:* _${message}_`,
				}
			]
		});
		axios.post('https://hooks.slack.com/services/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', formData)
			.then(() => {
				this.setState({
					messageIsVisible: true,
					formIsSubmitted: true,
					name: '',
					email: '',
					phone: '',
					website: '',
					message: '',
				});
				setTimeout(() => this.setState({messageIsVisible: false}), 5000);
			});
	}

	handleFormInput(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	showMessage(message) {
		return (
			<div className={classnames('form-message', this.state.messageIsVisible && 'appearance')}>
				{message}
			</div>
		);
	}

  render() {
		const {
			name, email, phone, website, message
		} = this.state;
    return (
      <div className="contact-us">
				<div>
				<SectionHeading subTitle="feel free to" title="contact us" />
					<form onSubmit={e => this.handleSubmit(e)}>
						<div className="form-raw">
							<Input
								required
								name="name"
								type="text"
								placeholder="Name *"
								value={name}
								onChange={e => this.handleFormInput(e)}
							/>
							<Input
								required
								name="email"
								type="email"
								placeholder="Email *"
								value={email}
								onChange={e => this.handleFormInput(e)}
							/>
						</div>
						<div className="form-raw">
							<Input
								name="phone"
								type="phone"
								placeholder="Phone"
								value={phone}
								onChange={e => this.handleFormInput(e)}
							/>
							<Input
								name="website"
								type="text"
								placeholder="Website"
								value={website}
								onChange={e => this.handleFormInput(e)}
							/>
						</div>
						<TextArea
							required
							name="message"
							value={message}
							placeholder="Message *"
							onChange={e => this.handleFormInput(e)}
						/>
						<Button
							className="form-btn"
							title={this.state.formIsSubmitted ? 'Thanks!' : 'SEND'}
							disabled={this.state.formIsSubmitted}
						/>
					</form>
					{this.showMessage('*you message has been sent')}
				</div>
				<Footer
					address="240 Richmond St W, Toronto, ON M5V 1V6"
					email="hello@insighty.studio"
				/>
      </div>
    );
  }
}

export default ContactUs;
