import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let photo;
  let firstName;
  let lastName;

  uploadPhoto()
    .then((res) => {
      photo = res.body;
    })
    .then(() => createUser())
    .then((res) => {
      firstName = res.firstName;
      lastName = res.lastName;
    })
    .catch((error) => console.error(error))
    .finally(() => {
      console.log(`${photo} ${firstName} ${lastName}`);
    });
}
