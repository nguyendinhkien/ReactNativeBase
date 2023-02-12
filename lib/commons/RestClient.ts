import axios from 'axios';
import Config from 'react-native-config';
import {Platform} from 'react-native/types';
import {IBaseModel} from '../data/models/BaseModel';
import {IEndpoint} from './Endpoint';

async function getInstance() {
  return axios.create({
      baseURL: Config.API_URL,
      timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${globalStore.token}`
    },
  });
}

export async function callAPI(endpoint: IEndpoint, param?: any) {
  const instance = await getInstance();
  const method = endpoint.method ?? 'GET';
  const url = endpoint.url;
  try {
    console.log(`=========${method}============`);
    console.log(url);
    if (param) {
      console.log(param);
    }
    const response = await (method === 'POST'
      ? instance.post(url, param)
      : method === 'DELETE'
      ? instance.delete(url)
      : method === 'PUT'
      ? instance.put(url, param)
      : instance.get(url, param));
    console.log('====RESPONSE===');
    console.log(response.data);
    console.log(`====END ${method}======`);
    if (response.status == 200) {
      const result: IBaseModel = {
        code: 0,
        message: response.data.description,
        data: response.data,
      };
    }
  } catch (error) {
    return handleResponse(error);
  }
}

async function uploadAPI(endpoint: string, param: any, ...images: any[]) {
  const instance = await getInstance();
  const formData = new FormData();
  formData.append('data', param);
  images.forEach((image, i) => {
    formData.append('images', {
      ...image,
      uri:
        Platform.OS === 'android'
          ? image.uri
          : image.uri.replace('file://', ''),
      name: `image-${i}`,
      type: 'image/jpeg', // it may be necessary in Android.
    });
  });
  try {
    console.log('=========UPLOAD============');
    console.log(endpoint);
    const response = await instance.post(endpoint, formData);
    console.log('====RESPONSE===');
    console.log(response);
    console.log('====END UPLOAD======');
    if (response.status == 200) {
      return {
        code: 0,
        message: response.data.description,
        response: response.data,
      };
    }
  } catch (error) {
    return handleResponse(error);
  }
}

function handleResponse(error: any) {
  console.log('==========ERROR=============');
  console.log(error.response);
  console.log(error.response.data);
  console.log(error.response.status);
  const status = error.response.status;
  const message = error.response.data.error;
  console.log('Message:', message);

  const errorResponse: IBaseModel = {
    code: status,
    message: message,
    data: null,
  };

  if (status == 401) {
    setTimeout(() => {
      //   Alert.alert('Thông báo', message, [
      //     {
      //       text: 'OK',
      //       onPress: () => {
      //         RootNavigation.navigate('SCREEN_REGISTER');
      //       },
      //     },
      //   ]);
    }, 500);
  }
  return errorResponse;
}
