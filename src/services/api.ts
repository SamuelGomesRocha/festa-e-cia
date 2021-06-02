import Axios from 'axios'
import config from '../../config';

const app = Axios.create({
	baseURL: config.url
})

export default app;