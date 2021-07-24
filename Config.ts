import {Platform} from 'react-native';
import ENV from 'react-native-config';

// Address to stripe server running on local machine
// export const LOCAL_URL =
//   Platform.OS === 'android' ? 'http://10.0.2.2:4242' : 'http://localhost:4242';

// export const API_URL = ENV.API_URL ? ENV.API_URL : LOCAL_URL;

export const API_URL = 'https://us-central1-refresh-2f00d.cloudfunctions.net/expressApi'
export const LOCAL_URL = 'http://localhost:4242'