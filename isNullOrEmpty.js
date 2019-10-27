/**This program is to implement standard string type without using builtin functions*/

const isNullOrEmpty = function (string) {
  return string === undefined || string == null || string.length == 0 ? true : false;
}