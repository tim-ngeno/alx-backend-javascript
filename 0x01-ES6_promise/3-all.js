import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    Promise.all([uploadPhoto(), createUser()])
      .then(([photoResponse, userResponse]) => {
        const result = (`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
        console.log(result);
        resolve(result);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}
