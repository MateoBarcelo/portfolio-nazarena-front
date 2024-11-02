import axios from 'axios'
import emailjs from '@emailjs/browser'

const baseURL = `${import.meta.env.VITE_APIURL}/api/contact`

const sendMail = async mail => {

    emailjs.init({
        publicKey: 'DWtOYNFn1innytrUX',
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {
          // The variable contains the email address
          watchVariable: 'mail',
        },
        limitRate: {
          // Set the limit rate for the application
          id: 'service_xr74glq',
          // Allow 1 request per 10s
          throttle: 10000,
        },
      });

    const emailResponse = await emailjs.send('service_xr74glq', 'template_lrgwsjg', mail)

    return emailResponse
}

export default { sendMail }