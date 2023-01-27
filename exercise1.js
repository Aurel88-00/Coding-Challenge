const array = [2, 6, 7, 1, 10, 22, 5];

/**
 *
 * @param {Array<number>} array
 * @return {{ isAscending: boolean, updatedList: Array<number>}}
 */

function checkTransformedListOrder(list) {
  let isAscending = true;

  const updatedList = [];

  for (let i = 0; i < list.length; i++) {
    if (i === list.length - (i + 1)) {
      updatedList.push(list[i]);

      if (
        updatedList[updatedList.length - 2] >
        updatedList[updatedList.length - 1]
      ) {
        isAscending = false;
      }
      break;
    } else {
      if (list.length === updatedList.length) {
        break;
      }

      updatedList.push(list[i]);
      updatedList.push(list[list.length - (i + 1)]);

      if (list[i] > list[list.length - (i + 1)]) {
        isAscending = false;
      }
    }
  }

  return {
    updatedList,
    isAscending,
  };
}