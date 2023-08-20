import { Text } from '../text/Text';
import './ConfirmMessage.css';

export const ConfirmMessage = () => {
    return (
        <div className="confirm-container">
            <img src="assets/images/icon-thank-you.svg" width={80} height={80}></img>
            <Text content='Thank you!' size='lg'/>
            <Text color="secondary" content='Thanks for confirming your subscription! We hope you have fun using out platform. If you ever need support, please feel free to email us at support@loremgaming.com'/>
        </div>
    )
}