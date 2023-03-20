const object = {
  user_email: 'phamtuan12022001@gmail.com',
  user_password: 'Tuan1202@'
};

/*
    name = 'Kim',
	isBFF = true,
*/

console.log(
  JSON.stringify(object)
  .replaceAll(':"', "='").replaceAll('"=', " = ")
  .replaceAll('","', "' AND ")
  .replaceAll('{"', "").replaceAll('"}', "'")
);


