// @ts-check
// ts-check for finding some stupid bugs that js allows (like having number and string calculations)
// Be aware that it also shows those ONLY typescript bugs! (those can be ignored)

// GET
// const getPassword = async () => {
//   try {
//     const password = await Promise.resolve(
//       fetch("https://") // 34636
//     ).then((res) => {
//       return;
//     });
//     return password;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const userPassword = getPassword();

class User {
  /**
   * @param {any} username
   * @param {any} password
   * @param {any} rememberPassword
   */
  constructor(username, password, rememberPassword, deviceFeature) {
    this.password = password;
    this.username = username;
    this.rememberPassword = rememberPassword;
    this.device = deviceFeature;
  }
}

// PUT
// const putUser = async () => {
//   try {
//     const response = await Promise.resolve(fetch(`https://${user.username}`, {})).then(
//       (res) => {
//         return;
//       }
//     );
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// };
